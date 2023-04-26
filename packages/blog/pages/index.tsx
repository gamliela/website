import React, { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

function Page(): ReactElement {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="antialiased text-gray-900 px-6 py-6 prose">
        <article className="prose lg:prose-xl">
          <header>
            <h1>Alon Gamliel</h1>
            <h2>Software Developer and Solution Architect</h2>
          </header>
          <section>
            <p>
              Hi there! I&apos;m a software developer based in Wellington, New
              Zealand, with a passion for problem-solving through code. I
              specialize in Amazon Connect and custom Softphone development, and
              I&apos;m fluent in many languages, including Typescript.
            </p>
            <p>
              Whether you&apos;re in need of software engineering services or
              just want to chat about your latest project, I&apos;m happy to
              help on an hourly basis and open to remote work. Check out my{" "}
              <a
                href="https://www.linkedin.com/in/gamliela/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin profile
              </a>{" "}
              to learn more, and feel free to{" "}
              <a href="#contact-section">reach out</a> if you have any questions
              or just want to say hello!
            </p>
          </section>
          <section>
            <h3>Software Development</h3>
            <p>
              With many years of experience as a &quot;hands-on&quot; software
              engineer, I am well-equipped to be your extra hand in bringing
              your project to successful completion. I&apos;d be happy to assist
              you.
            </p>
            <ul>
              <li>Typescript, Javascript, Java, SQL &amp; AWS.</li>
              <li>Fullstack development: Frontend, Backend and DevOps.</li>
              <li>
                Complete lifecycle support: Coding, Testing, Deploying &amp;
                Training.
              </li>
              <li>+15 years of experience.</li>
            </ul>
          </section>
          <section>
            <h3>MVP Development</h3>
            <p>
              I have long experience in small startup companies, as an employee
              or as a founder. Let&apos;s work together to turn your software
              idea into a reality!
            </p>
            <ul>
              <li>Plan for scale; code the essentials.</li>
              <li>Product scope refinement.</li>
              <li>Sensible technical choices.</li>
              <li>Infrastructure setup (AWS).</li>
              <li>Deployment setup (CI/CD).</li>
              <li>
                <Link href="/blog/advanced-testing-with-jest">
                  <a>Testing framework</a>
                </Link>{" "}
                setup.
              </li>
            </ul>
          </section>
          <section>
            <h3>Software Architecture</h3>
            <p>
              If you need to solve a complex engineering problem, I can help
              with deep thinking and formulating a solution.
            </p>
            <ul>
              <li>Technical design documents.</li>
              <li>Architectural diagrams.</li>
              <li>Strong writing &amp; presentation skills.</li>
              <li>Master&apos;s degree in Computer Science.</li>
            </ul>
          </section>
          <section>
            <h3>Technical Consultation</h3>
            <p>
              Partnering with a technical expert allows you to focus on the
              development and growth of your product.
            </p>
            <ul>
              <li>Time &amp; complexity estimations.</li>
              <li>Code quality evaluation.</li>
              <li>Trusted code reviews.</li>
            </ul>
          </section>
          <section>
            <h3>Serverless Website Development</h3>
            <p>
              I love Frontend development, and I specialise in React. With
              serverless development techniques, I can build a website with
              negligible monthly costs while retaining high availability.{" "}
              <Link href="/blog/a-gentle-introduction-to-serverless-development">
                Read more
              </Link>
            </p>
            <ul>
              <li>Serverless deployments (e.g. Netlify, S3).</li>
              <li>Admin portals, dashboards.</li>
              <li>
                Pixel-perfect implementation with a designer of your choice.
              </li>
              <li>Authentication (e.g. Google login).</li>
              <li>Database (e.g. Firebase).</li>
            </ul>
          </section>
          <section>
            <h3>Amazon Connect Specialist</h3>
            <p>
              I have special experience in building software for contact
              centres, using Amazon Connect.
            </p>
            <ul>
              <li>AWS integration (Lambdas, DynamoDB).</li>
              <li>Softphone Extensions.</li>
              <li>Contact centre dashboards.</li>
              <li>Management portals.</li>
            </ul>
          </section>
          <section>
            <h3>Blog</h3>
            <p>
              I am currently in the process of building my blog&apos;s content,
              but feel free to check out my first posts and stay tuned for more
              updates.
            </p>
            <ul>
              <li>
                <Link href="/blog/advanced-testing-with-jest">
                  <a>Advanced Testing with Jest</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/a-gentle-introduction-to-serverless-development">
                  <a>A Gentle Introduction to Serverless Development</a>
                </Link>
              </li>
            </ul>
          </section>

          <section id="contact-section">
            <h3>Contact</h3>
            <ContactForm />
          </section>
        </article>
      </main>
    </>
  );
}

export default Page;
