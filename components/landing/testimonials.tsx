import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer at Google',
    image: '👩‍💼',
    content: 'InterviewPilot completely transformed my interview prep. I went from nervous to confident in just 4 weeks. The AI feedback was incredibly accurate!',
    rating: 5
  },
  {
    id: 2,
    name: 'Alex Chen',
    role: 'Product Manager at Meta',
    image: '👨‍💼',
    content: 'The mock interviews felt so realistic. I practiced with InterviewPilot and landed my dream PM role at Meta. Highly recommend!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'UX Designer at Figma',
    image: '👩‍🎨',
    content: 'As someone switching careers into design, this platform was a game-changer. The guidance and AI feedback helped me ace my interviews.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Job Seekers
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Join thousands who&apos;ve successfully landed their dream jobs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card-bg border border-border rounded-xl p-8 space-y-4 hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
