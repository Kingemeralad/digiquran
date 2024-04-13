const Navigation = (props) => {
  return (
    <div className="backdrop-black-sm bg-grey/80 border-b-2 sticky top-0 drop-shadow-md z-[100]">
      <div className="navbar container mx-auto  ">
        <div className="flex-1">
          <a
            href="/"
            className="btn btn-sm bg-gradient-to-r hover:bg-gradient-to-t from-slate-800 to-slate-700 border-none hover:shadow-lg focus:ring-2 ring-offset-2 ring-slate-800"
          >

             Kembali 
          </a>

          {props.loadP ? (
            <>
              <div className="ml-2 md:ml-7 nunito text-xl">
                <h1 className="-mb-2 font-bold">{props.suratP}</h1>
                <span className="label-text-alt text-slate-500 capitalize">
                  {props.artiP} | {props.jumlahP} | {props.turunP}
                </span>
              </div>
            </>
          ) : (
            <div className="animate-pulse ml-2 md:ml-7">
              <div className="h-2 bg-slate-300 rounded"></div>
              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="h-2 w-7 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 w-7 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 w-7 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li tabIndex={0}>
              <a>
                Ayat
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>

              <ul className="p-2 backdrop-black-sm bg-white/90 border-b-2 overflow-y-scroll max-h-[350px] min-w-[100px]">
                {props.singleSP.map((sp) => (
                  <li key={sp.nomor}>
                    <a href={"/surat/" + sp.surah + "#" + sp.nomor}>
                      {sp.nomor}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
