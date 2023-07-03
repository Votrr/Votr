

function LandingPage (){
  return (
    <div className="bg-gray-100">

      <section className="h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Welcome to Votr.io
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Revolutionizing Electronic Voting through Blockchain
          </h2>
          <p className="text-lg mb-8">
            Votr.io is an innovative platform that leverages blockchain
            technology to revolutionize electronic voting. Our mission is to
            provide a decentralized, transparent, and secure voting platform
            that restores trust and integrity in the electoral process.
          </p>
        </div>
      </section>
      <section className=" min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center px-4">
          <h3 className="text-2xl md:text-4xl font-bold mb-8">
            Why Choose Votr.io?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Transparent and Secure
              </h4>
              <p>
                With Votr.io, every vote is recorded on the blockchain, creating
                a transparent and tamper-proof voting record. Rest assured that
                your vote is secure, and the results are verifiable, promoting
                trust and confidence in the electoral process.
              </p>
            </div>
            <div className="p-4">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Convenient and Accessible
              </h4>
              <p>
                Participate in elections from the comfort of your home or
                anywhere with an internet connection. Votr.io's user-friendly
                interface makes voting easy and accessible, enabling greater
                engagement and increasing voter turnout.
              </p>
            </div>
            <div className="p-4">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Fair and Reliable
              </h4>
              <p>
                Votr.io ensures that each vote is counted accurately and without
                bias, promoting a fair and democratic process. Our platform
                leverages blockchain technology to eliminate concerns of fraud
                and manipulation, providing a reliable voting experience.
              </p>
            </div>
            <div className="p-4">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Customizable and Scalable
              </h4>
              <p>
                Whether it's a small-scale organization or a nationwide
                election, Votr.io is designed to adapt to various voting
                scenarios. It supports different voting methods and scales
                effortlessly to meet the requirements of any election, providing
                flexibility and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center px-4">
          <h3 className="text-2xl md:text-4xl font-bold mb-8">
            Join the Votr.io Revolution
          </h3>
          <p className="text-lg mb-8">
            Experience a new era of secure, transparent, and convenient voting.
            Join us as we reshape the future of elections and restore trust in
            the electoral process. Get started today and be part of the movement
            towards fair and legitimate elections worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
