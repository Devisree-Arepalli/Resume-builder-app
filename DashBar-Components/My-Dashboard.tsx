import Head from 'next/head';
import Header from '../DashBar-Components/components/Header';
import TabNav from '../DashBar-Components/components/TabNav';
import Button from '../DashBar-Components/components/Button';
import Notification from '../DashBar-Components/components/Notification';

const DHome: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Head>
        <title>Next.js with TypeScript</title>
        <meta name="description" content="A sample layout built in Next.js with TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center px-0 pt-16 lg:pt-0 lg:px-16">
        <div className="relative w-full max-w-full gap-4 flex min-h-[calc(100dvh_-_64px)] w-full flex-col justify-start gap-4 px-4 md:px-6 lg:min-h-[calc(100dvh_-_16px)] lg:max-w-[824px] lg:px-6 xl1:max-w-[968px] xl:max-w-[1248px] xl:px-8">
          <Header />
          <main className="sm:h-full lg:h-auto">
            <TabNav />
            <Button label="Click Me" onClick={handleButtonClick} />
            <Notification message="This is a notification!" />
          </main>
        </div>
      </div>
    </>
  );
};

export default DHome;
