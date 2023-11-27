const Contact = () => {
  return (
    <section id="contact" className="contact py-[80px] bg-secondary">
      <div className="container px-[17px]  p-0 m-auto max-w-[1070px] md:px-[40px]">
        <div className="contact__content flex flex-col m-0 p-0 text-center md:text-start">
          <div className="contact__title">
            <p className="mb-[10px] text-[17px] font-bold uppercase text-[#147efb]">
              contact
            </p>
            <h3 className="text-[25px] font-bold md:m-0">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="contact__icons flex flex-col flex-wrap mt-[60px] justify-center p-0 gap-x-[50px] gap-y-[50px] md:flex-row md:gap-x-[80px] md:gap-y-[80px] md:justify-start">
            <div className="contact__icon-box flex flex-col items-center p-0 m-0 gap-x-[15px] gap-y-[15px] md:flex-row">
              <span className="flex h-[50px] w-[50px] items-center justify-center bg-secondary shadow-md text-[#147efb] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="contact__info flex flex-col gap-x-[5px] gap-y-[5px] ">
                <h3 className="text-[17px] font-bold ">Location</h3>
                <p className="text-[17px] text-[#767676] font-medium dark:text-[gray]">
                  Lahore, Pakistan
                </p>
              </div>
            </div>
            <div className="contact__icon-box flex flex-col items-center p-0 m-0 gap-x-[15px] gap-y-[15px] md:flex-row">
              <span className="flex h-[50px] w-[50px] items-center justify-center bg-secondary shadow-md text-[#147efb] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="contact__info  ">
                <h3 className="text-[17px] font-bold ">Mail</h3>
                <a
                  href="mailto:stefan.topallovic@gmail.com"
                  className="text-[#767676] font-medium dark:text-[gray]"
                >
                  m.tayyab.aw@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
