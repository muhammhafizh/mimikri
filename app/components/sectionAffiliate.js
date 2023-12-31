export default function EmailSection() {
  return (
    <main style={{ backgroundColor: "#E5C643" }} id="contactUs">
      <section className="container mx-auto py-10">
        <h1 className="text-center font-extrabold text-white text-2xl">
          JOIN AFFILIATE MARKETING
        </h1>
        <p className="text-center font-light text-white my-10 text-lg">
          Type your email down below and be young wild generation
        </p>
        <form className="flex bg-white w-80 h-14 mx-auto rounded-lg py-1 ps-3 pe-1">
          <input
            type="email"
            placeholder="Add your email here"
            className="text me-auto focus:outline-none focus:text-gray-400"
          />
          <button
            className="px-7 bg-black hover:bg-stone-800 text-white rounded-lg text-base"
            type="submit"
            id="send to email"
            aria-label="sending to email mimikri"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
