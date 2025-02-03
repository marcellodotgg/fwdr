import {HeroHeader} from "~/components/homepage/hero-header";

export default function Home() {
  return <>
    <main class="flex flex-col gap-16 pt-8">
      <HeroHeader />
      <div class="container flex flex-col gap-4">
        <h1 class="text-3xl font-extrabold">Dead Simple API</h1>
        <p>
          Our goal is simplicity and efficiency. That's why our service is written in Rust. Our primary
          endpoint is right on the root of our endpoint. Just make a <code>POST</code> and we'll take care of the rest.
          You can call our API from anywhere, on any device, and in any programming language. Below is an example of
          how you can use fwdr directly in the browser.
        </p>
        <pre class="bg-primary-300 p-4 w-full overflow-x-auto border border-primary-200">
          <code>
            {`fetch('https://api.fwdr.dev', { 
    method: 'POST', 
    body: {
        recipient: "sample@fwdr.dev",
        subject: "From FWDR",
        body: "This was sent from FWDR",
    } 
 });`}
          </code>
        </pre>
      </div>
      <section class="bg-primary-300 border border-primary-200">
        <div class="container py-8 flex flex-col gap-4">
          <img class="mx-auto rounded-full" width={128} height={128} src="https://avatars.githubusercontent.com/u/104793781?v=4" alt="Marcello's Profile Image" />
          <h1 class="font-extrabold text-3xl text-center">From the Team</h1>
          <p>
            We are still in our beta phase. We are doing some analysis on how we can make our service better. Therefore,
            at any moment anything can change; including the API itself. So, please keep that in mind until we work
            towards our stable release of fwdr.
          </p>
          <p>
            As mentioned above, our core values at fwdr are simplicity and efficiency for developers. What good is an
            e-mail forwarding service if it's too cumbersome to use? Right now, simplicity is easy, but in the future
            we plan on having fwdr become feature-rich &mdash; without compromising our core values.
          </p>
          <p>
            Stay tuned to witness fwdr blossom.
          </p>
          <p>&mdash; Marcello, Core Developer</p>
        </div>
      </section>
      <section class="container flex flex-col gap-4">
        <h1 class="text-3xl font-extrabold">Peak Your Interest?</h1>
        <p>
          Well, if you have any other questions regarding fwdr, fwd me a message below!
        </p>
      </section>
    </main>
  </>
}
