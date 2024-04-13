import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";



const Quran = () => {
  const [Loading, setLoading] = useState(false);

  const [dataSurat, setSurat] = useState([]);
  const getAPIsurat = async () => {
    const ResponAPI1 = await fetch("https://equran.id/api/surat");
    const dataAPI1 = await ResponAPI1.json();
    setLoading(true);                                           
    setSurat(dataAPI1);
  };




  useEffect(() => {
    getAPIsurat();
  });

  const skeletonLoad = [1, 2, 3, 4, 5];
  const [querySearch, setQuerySearch] = useState("");

  window.onscroll = function () {
    scrollFunction();
  };

  const [showBT, setShowBT] = useState("");
  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setShowBT(true);
    } else {
      setShowBT(false);
    }
  }

  return (
    <>
      <Toaster />
      {localStorage.removeItem("fromBookmark", false)}


     
      
<div className="navbar bg-base-200">
  <div className="navbar-start">
    <a href="/" className="btn btn-ghost lg-case text-xl">📖 DigiQur'an</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <a href="/about" className="btn btn-ghost tiny-case text-xs">Tentang Website</a>
          <a href="https://darrellcorp.repl.co" className="btn btn-ghost tiny-case text-xs">Tentang Developer</a>
    <a href="https://www.jadwalsholat.org/" className="btn btn-ghost tiny-case text-xs">Waktu Sholat</a>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="mailto:kingemerald51@protonmail.ch" className="btn">Hubungi Developer</a>
  </div>
</div>
      <div className="container mx-auto my-10 px-3">
        <div
          className="hero min-h-[200px] rounded-xl lg:rounded-xl flex flex-wrap"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/8522611/pexels-photo-8522611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        >
          
          <div className="hero-overlay bg-opacity-60 py-10 text-white">
            <div className="md:w-[70%] mx-auto">
              <div className="w-full">
                <h1 className="text-5xl mb-3 lg:text-5xl sm:text-md font-bold">
                  DigiQur'an
                </h1>
                <p className="mb-5">
                 Website Mushaf Al Qur'an Gratis Berbasis Digital. Dengan 30 Juz, 114 Surah Lengkap dengan Terjemahannya. Dibuat Oleh Darrell Haidar.
                  
                 
               
                  
                </p>
              </div>
              <input
                type="text"
                onChange={(e) => setQuerySearch(e.target.value)}
                placeholder="🔎 Kolom Pencarian"
                 className="input text-slate-600 w-full"
              />
  
            </div>
          </div>
        </div>
      </div>

   

      <div className=" grid grid-cols-1 gap-4 px-3 lg:grid-cols-3 lg:gap-4 sm:grid-cols-2 sm:gap-4 container mx-auto mb-14">
        {Loading
          ? dataSurat
              .filter((QF) => {
                if (!querySearch) {
                  return QF;
                } else if (
                  QF.nama_latin
                    .toLowerCase()
                    .includes(querySearch.toLowerCase())
                ) {
                  return QF;
                }
              })
              .map((s) => (


                
                <div className="card w-full bg-base-100 shadow-md hover:border-slate-600 border-dashed border-[1px]">
                  <div className="card-body">
                    <h2
                      className="card-title mb-0 font-serif"
                      key={s.nama_latin}
                    >
                      {s.nama_latin}
                    </h2>
                    <p className="text-left font-serif -mt-[20px]">
                      {s.arti} |{" "}
                      <span className="arab text-[5px]">{s.nama}</span>
                    </p>

                    <div className="flex gap-1">
                      <div className="badge badge-outline">{s.jumlah_ayat}</div>
                      <div className="badge badge-outline capitalize">
                        {s.tempat_turun}
                      </div>
                    </div>
                    

                    <div className="card-actions justify-start">
                      <Link
                        to={"/surat/" + s.nomor}
                        className="btn btn-sm bg-gradient-to-r hover:bg-gradient-to-t from-slate-800 to-slate-700 border-none hover:shadow-lg focus:ring-2 ring-offset-2 ring-slate-800"
                      >
                        Tekan untuk Membaca 
                      </Link>
                    </div>
                  </div>
                </div>
              ))
          : // <div className="h-40 flex justify-center items-center">
            //   <progress className="progress w-56"></progress>
            // </div>
            skeletonLoad.map((L) => (
              <div className="card w-96 bg-base-100 shadow-md ">
                <div className="card-body">
                  <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-40 mb-1 animate-pulse"></div>
                  <div className="h-2.5 bg-gray-200 rounded-md dark:bg-gray-700 w-48 mb-4 animate-pulse"></div>

                  <div className="flex gap-1">
                    <div className="badge badge-outline animate-pulse bg-gray-50">
                      <div className="w-5"></div>
                    </div>
                    <div className="badge badge-outline animate-pulse bg-gray-50">
                      <div className="w-9"></div>
                    </div>
                  </div>

                  <div className="card-actions justify-start animate-pulse">
                    <button className="btn btn-sm w-32"></button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <Footer />
    </>
  );
};
export default Quran;
