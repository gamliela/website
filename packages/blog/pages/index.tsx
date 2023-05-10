import React, { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import styles from "./index.module.css";
import icon_ts from "./assets/software_development/icon_ts.svg";
import icon_fullstack from "./assets/software_development/icon_fullstack.svg";
import icon_lifecycle from "./assets/software_development/icon_lifecycle.svg";
import icon_experience from "./assets/software_development/icon_experience.svg";
import icon_scale from "./assets/mvp_development/icon_scale.svg";
import icon_scope from "./assets/mvp_development/icon_scope.svg";
import icon_tools from "./assets/mvp_development/icon_tools.svg";
import icon_aws from "./assets/mvp_development/icon_aws.svg";
import icon_cicd from "./assets/mvp_development/icon_cicd.svg";
import icon_testing from "./assets/mvp_development/icon_testing.svg";
import icon_design from "./assets/software_architecture/icon_design.svg";
import icon_diagram from "./assets/software_architecture/icon_diagram.svg";
import icon_writing from "./assets/software_architecture/icon_writing.svg";
import icon_mba from "./assets/software_architecture/icon_mba.svg";
import icon_review from "./assets/technical_consultation/icon_review.svg";
import icon_clock from "./assets/technical_consultation/icon_clock.svg";
import icon_qa from "./assets/technical_consultation/icon_qa.svg";
import icon_serverless from "./assets/serverless/icon_serverless.svg";
import icon_admin from "./assets/serverless/icon_admin.svg";
import icon_pen from "./assets/serverless/icon_pen.svg";
import icon_auth from "./assets/serverless/icon_auth.svg";
import icon_database from "./assets/serverless/icon_database.svg";
import icon_dashboard from "./assets/amazon_connect/icon_dashboard.svg";
import icon_integrations from "./assets/amazon_connect/icon_integrations.svg";
import icon_extensions from "./assets/amazon_connect/icon_extensions.svg";
import icon_portal from "./assets/amazon_connect/icon_portal.svg";

function Page(): ReactElement {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/google-font-display,@next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..700"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${styles.main} antialiased`}>
        <article className={styles.article}>
          <header className={styles.hero}>
            <h1 className="m-0">Alon Gamliel</h1>
            <h2>Software Developer and Solution Architect</h2>
          </header>
          <section
            className={`${styles.section} ${styles.sectionWhite} ${styles.intro}`}
          >
            <p>
              Hi there! I&apos;m a software developer based in Wellington, New
              Zealand, with a passion for problem-solving through code. I
              specialize in Amazon Connect and custom Softphone development, and
              I&apos;m fluent in many languages, including Typescript.
            </p>
            <p>
              Whether you&apos;re in need of software engineering services or
              just want to chat about your latest project, I&apos;m happy to
              help.
            </p>
            <p>
              {" "}
              Check out my{" "}
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
            <p className={styles.separator} style={{ marginTop: "4em" }} />
          </section>
          <section
            className={`${styles.section} ${styles.sectionGrey} ${styles.softwareDevelopment}`}
          >
            <h3>Software Development</h3>
            <p>
              With many years of experience as a &quot;hands-on&quot; software
              engineer, I am well-equipped to be your extra hand in bringing
              your project to successful completion. I&apos;d be happy to assist
              you.
            </p>
            <ul className={styles.iconList} style={{ marginTop: "2em" }}>
              <li>
                <Icon icon={icon_ts} />
                <span>Typescript, Javascript, Java, SQL &amp; AWS.</span>
              </li>
              <li>
                <Icon icon={icon_fullstack} />
                <span>
                  Fullstack development:
                  <br />
                  Frontend, Backend and DevOps.
                </span>
              </li>
              <li>
                <Icon icon={icon_lifecycle} />
                <span>
                  Complete lifecycle support:
                  <br />
                  Coding, Testing, Deploying &amp; Training.
                </span>
              </li>
              <li>
                <Icon icon={icon_experience} />
                <span>+15 years of experience.</span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionWhite} ${styles.mvpDevelopment}`}
          >
            <h3>MVP Development</h3>
            <p>
              I have long experience in small startup companies, as an employee
              or as a founder. Let&apos;s work together to turn your software
              idea into a reality!
            </p>
            <ul className={styles.iconList}>
              <li>
                <Icon icon={icon_scale} />
                <span>Plan for scale; code the essentials.</span>
              </li>
              <li>
                <Icon icon={icon_scope} />
                <span>Product scope refinement.</span>
              </li>
              <li>
                <Icon icon={icon_tools} />
                <span>Sensible technical choices.</span>
              </li>
              <li>
                <Icon icon={icon_aws} />
                <span>Infrastructure setup (AWS).</span>
              </li>
              <li>
                <Icon icon={icon_cicd} />
                <span>Deployment setup (CI/CD).</span>
              </li>
              <li>
                <Icon icon={icon_testing} />
                <span>
                  <Link href="/blog/advanced-testing-with-jest">
                    <a>Testing framework</a>
                  </Link>{" "}
                  setup.
                </span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionGrey} ${styles.softwareArchitecture}`}
          >
            <h3>Software Architecture</h3>
            <p>
              If you need to solve a complex engineering problem,
              <br /> I can help with deep thinking and formulating a solution.
            </p>
            <ul className={styles.iconGroup}>
              <li>
                <Icon icon={icon_design} />
                <span>Technical design documents.</span>
              </li>
              <li>
                <Icon icon={icon_diagram} />
                <span>Architectural diagrams.</span>
              </li>
              <li>
                <Icon icon={icon_writing} />
                <span>Strong writing &amp; presentation skills.</span>
              </li>
              <li>
                <Icon icon={icon_mba} />
                <span>Master&apos;s degree in Computer Science.</span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionWhite} ${styles.technicalConsultation}`}
          >
            <p
              className={styles.separator}
              style={{
                marginRight: "0",
                translate: "0 -2em",
              }}
            />
            <h3>Technical Consultation</h3>
            <p>
              Partnering with a technical expert allows you to focus on the
              development and growth of your product.
            </p>
            <ul
              className={styles.iconList}
              style={{ marginTop: "3em", marginBottom: "3em" }}
            >
              <li>
                <Icon icon={icon_clock} />
                <span>Time &amp; complexity estimations.</span>
              </li>
              <li>
                <Icon icon={icon_qa} />
                <span>Code quality evaluation.</span>
              </li>
              <li>
                <Icon icon={icon_review} />
                <span>Trusted code reviews.</span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionGrey} ${styles.serverless}`}
          >
            <h3>Serverless Website Development</h3>
            <p>
              I love Frontend development, and I specialise in React. With
              serverless development techniques, I can build a website with
              negligible monthly costs while retaining high availability.{" "}
              <Link href="/blog/a-gentle-introduction-to-serverless-development">
                Read more
              </Link>
            </p>
            <ul className={styles.iconGroup} style={{ marginTop: "2em" }}>
              <li>
                <Icon icon={icon_serverless} />
                <span>
                  Serverless
                  <br />
                  deployments
                  <br />
                  (e.g. Netlify, S3).
                </span>
              </li>
              <li>
                <Icon icon={icon_admin} />
                <span>
                  Admin portals,
                  <br />
                  dashboards.
                </span>
              </li>
              <li>
                <Icon icon={icon_pen} />
                <span>
                  Pixel-perfect
                  <br />
                  implementation with a<br />
                  designer of your choice.
                </span>
              </li>
              <li>
                <Icon icon={icon_auth} />
                <span>
                  Authentication
                  <br />
                  (e.g. Google login).
                </span>
              </li>
              <li>
                <Icon icon={icon_database} />
                <span>
                  Database
                  <br />
                  (e.g. Firebase).
                </span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionWhite} ${styles.amazonConnect}`}
          >
            <p
              className={styles.separator}
              style={{
                marginBottom: "2em",
                translate: "0 -1em",
              }}
            />
            <h3>Amazon Connect Specialist</h3>
            <p>
              I have special experience in building software for contact
              centres, using Amazon Connect.
            </p>
            <ul className={styles.iconList}>
              <li>
                <Icon icon={icon_integrations} />
                <span>AWS integration (Lambdas, DynamoDB).</span>
              </li>
              <li>
                <Icon icon={icon_extensions} />
                <span>Softphone Extensions.</span>
              </li>
              <li>
                <Icon icon={icon_dashboard} />
                <span>Contact centre dashboards.</span>
              </li>
              <li>
                <Icon icon={icon_portal} />
                <span>Management portals.</span>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.section} ${styles.sectionGrey} ${styles.sectionBlog}`}
          >
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

          <section
            id="contact-section"
            className={`${styles.section} ${styles.sectionWhite} ${styles.sectionContact}`}
          >
            <p
              className={styles.separator}
              style={{
                marginBottom: "2em",
                translate: "0 -1em",
              }}
            />
            <h3>Contact</h3>
            <ContactForm className={styles.contactForm} />
          </section>
        </article>
      </main>
      <footer className={styles.footer}>
        <span>Alon Gamliel</span>
        <span className={styles.footerTitle}>
          Software Developer and Solution Architect
        </span>
        <span>© 2023</span>
      </footer>
    </>
  );
}

function Icon({
  icon,
}: {
  icon: {
    src: string;
  };
}) {
  return (
    <div
      className={styles.icon}
      style={{ backgroundImage: `url('${icon.src}')` }}
    ></div>
  );
}

export default Page;
