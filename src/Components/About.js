const About = () => {
  return (
    <>
      <div className="container mx-auto selection:bg-red-300">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-center px-4 py-16 bg-base-200">
                <div>



                  <h1 className="text-3xl md:text-5xl font-bold">
                    Digi{" "}
                    <a
                      href="/"
                      className="font-serif underline p-1  decoration-sky-600 hover:decoration-slate-800"
                    >
                    Qur'an
                    </a>
                  </h1>
                  <span className="label-text-alt ">
                    Built with ✨React by Darrell Haidar 
                  </span>


                  <p className="py-6 w-full lg:w-[90%]">
                  DigiQur'an adalah Website Mushaf Al Qur'an 30 Juz Lengkap dengan terjemahannya. Menggunakan Riwayat Hafsh dari Imam Ashim dan Khat naskhi. 
                  </p>

     <a
                    href="/"

                    className="btn hover:bg-slate-900 shadow-lg"
                  >
                    Kembali

                    </a>

                  <a
                    href="#thanks"
                    className="btn btn-outline ml-3"
                  >
                    Lihat Lebih
                  </a>

                 


                  <a
                    href="mailto:kingemerald51@protonmail.ch"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline ml-3"
                  >
                    Hubungi Developer

                    </a>
                  <a
                    href="https://linktr.ee/darrellcorp"

                    className="btn btn-outline ml-3"
                  >
                    Tentang Developer

                    </a>
          
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="thanks">
          <h1 className="text-center mb-8 mt-3 font-bold text-2xl font-serif">
            Terimakasih Kepada :
          </h1>
          <div className="grid grid-cols-1 px-3 lg:grid-cols-3 gap-4 mb-10">
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px] ">
              <div className="card-body">
                <p className="text-left font-serif">Dibuat Dengan</p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  ✨ React 
                </h2>

                <div className="flex gap-1">
                  <div className="badge badge-outline">Javascript</div>
                  <div className="badge badge-outline capitalize">Library</div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://reactjs.org/"
                    className="btn btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    reactjs.org
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px] ">
              <div className="card-body">
                <p className="text-left font-serif">Provider Hosting</p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  🖥️ Repl.it
                </h2>

                <div className="flex gap-1">
                  <div className="badge badge-outline">Halaman Website</div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://www.replit.com/"
                    className="btn btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    replit
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px]">
              <div className="card-body">
                <p className="text-left font-serif">
                  Framework CSS
                </p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  🔆 Tailwind CSS
                </h2>
                <div className="flex gap-1">
                  <div className="badge badge-outline capitalize">
                    CSS framework
                  </div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://tailwindcss.com/"
                    className="btn btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tailwindcss
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px]">
              <div className="card-body">
                <p className="text-left font-serif">Tema</p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  🎊 daisyUI
                </h2>

                <div className="flex gap-1">
                  <div className="badge badge-outline">Tema</div>
                  <div className="badge badge-outline capitalize">CSS</div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://daisyui.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm"
                  >
                    daisyui
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px]">
              <div className="card-body">
                <p className="text-left font-serif">API</p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  📖 EQuran.id
                </h2>

                <div className="flex gap-1">
                  <div className="badge badge-outline">API</div>
                  <div className="badge badge-outline capitalize">OPEN API</div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://equran.id/apidev"
                    className="btn btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    equran.id
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-white shadow-xl border-dashed border-[1px]">
              <div className="card-body">
                <p className="text-left font-serif">Font Bahasa Arab</p>
                <h2 className="card-title mb-0 font-serif -mt-[7px]">
                  💬 LPMQ
                </h2>

                <div className="flex gap-1">
                  <div className="badge badge-outline">FONT</div>
                </div>

                <div className="card-actions justify-start">
                  <a
                    href="https://lajnah.kemenag.go.id/index.php"
                    className="btn btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kementerian Agama
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
