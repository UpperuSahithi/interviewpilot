'use client';

import Link from "next/link";
import { Show } from "@clerk/nextjs";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 rounded-2xl blur-2xl" />

          <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl p-12 md:p-16 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Ace Your Next Interview?
            </h2>

            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed
              their dream roles using InterviewPilot. Start practicing today
              for free.
            </p>

            <Show when="signed-out">
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/sign-up"
                  className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Get Started Free
                </Link>

                <Link
                  href="/sign-in"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
                >
                  Sign In
                </Link>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/dashboard"
                  className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all"
                >
                  Go to Dashboard
                </Link>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </section>
  );
}
