import {HeroHeader} from "~/components/homepage/hero-header";
import {FeatureCard} from "~/components/homepage/feature-card";
import {createSignal, onMount} from "solid-js";
import axios from "axios";
import {BASE_URL} from "~/app";

export default function Home() {
  const [user, setUser] = createSignal(null);

  onMount(async () => {
    const user = await axios.get(`${BASE_URL}/auth/whoami`, {withCredentials: true});
    setUser(user.data);
  });

  return <>
    <main class="flex flex-col gap-16 pt-8">
      <HeroHeader />
      <section id="api_sample" class="container flex flex-col gap-4">
        <h1 class="text-3xl font-extrabold">Dead Simple API</h1>
        <p>
          Our goal is simplicity and efficiency. That's why our service is written in Rust. Our primary
          endpoint is right on the root of our endpoint. Just make a <code>POST</code> and we'll take care of the rest.
          You can call our API from anywhere, on any device, and in any programming language. Below is an example of
          how you can use fwdr directly in the browser.
        </p>
        <pre class="bg-primary-300 p-4 w-full overflow-x-auto border border-primary-200 text-sm">
          <code>
            {`fetch('https://api.fwdr.dev', { 
    method: 'POST', 
    body: {
        to: "${user()?.email ?? 'example@fwdr.dev'}",
        subject: "fwdr demo",
        body: "${user()?.given_name ?? 'Hey'}, Welcome to fwdr",
    } 
 });`}
          </code>
        </pre>
      </section>
      <section id="features" class="container flex flex-col gap-4">
        <h1 class="font-extrabold text-3xl">Features</h1>
        <ul class="grid grid-auto-rows grid-cols-1 grid-auto-rows-[1fr] md:grid-cols-2 gap-4">
          <li><FeatureCard name="E-mail Anywhere">E-mail anyone from anywhere and on any device. Very simple integration, just call our API.</FeatureCard></li>
          <li><FeatureCard name="Dashboard">Users get access to their dashboard to see what e-mails they've sent/recieved.</FeatureCard></li>
          <li><FeatureCard name="Attachments" isPro={true}>Send attachments like a pro.</FeatureCard></li>
          <li><FeatureCard name="Multiple Recipients" isPro={true}>Send a single e-mail to multiple addresses all in one call.</FeatureCard></li>
          <li><FeatureCard name="Carbon Copy and Blind Carbon Copy" isPro={true}>Support for BCC and CC at your fingertips.</FeatureCard></li>
          <li><FeatureCard name="Rejection Notifications" isPro={true}>Find out if users received your e-mail and get notified if they haven't.</FeatureCard></li>
        </ul>
      </section>
      <section id="from_the_team" class="bg-primary-300 border border-primary-200">
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
