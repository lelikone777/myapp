import Card from "@/components/Card";

export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="text-xl">
        My name is <strong>[Your name]</strong>, and I'm a <strong>[Your role]</strong>.
      </p>
      <p className="text-xl">
        I have {skills.length} key skills:
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-4 my-8">
        {skills.map((skill) => (
          <li key={skill} className="w-full max-w-xl">
            <Card>
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl font-semibold">{skill}</h2>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
