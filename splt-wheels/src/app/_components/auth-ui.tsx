"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function AuthUI() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-4">
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-indigo-600"></div>
        <span className="text-gray-600">Loading...</span>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-700">
          Welcome, <span className="font-semibold">{session.user?.name}</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/signin"
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Sign In
      </Link>
    </div>
  );
}
