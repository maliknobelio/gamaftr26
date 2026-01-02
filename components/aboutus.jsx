import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="
        relative
        w-full
        min-h-[724px]
        flex
        items-center
        bg-gradient-to-b
        from-[#FFFFFF]
        to-[#B3D2C1]

        md:from-[#FFFFFF]  
        md:to-[#B3D2C1]
        py-16
        overflow-x-hidden
      "
    >
      {/* ================= ORNAMEN DESKTOP ================= */}
      <img 
        src="/AWAN 1.png" //kiri
        className="hidden md:block absolute w-auto h-full object-cover -translate-x-75 -translate-y-90 max-w-none scale-50"
      />
      <img 
        src="/AWAN 2.png" //kanan
        className="hidden md:block absolute w-auto h-full object-cover translate-x-95 -translate-y-95 max-w-none scale-50"
      />

      {/* ================= ORNAMEN MOBILE ================= */}
      <img
      src="/AWAN 1.png"//kiri
      className="
        md:hidden
        absolute
        top-0
        left-0
        w-[180px]
        scale-120
        h-auto
        object-contain
        pointer-events-none
        -translate-x-10
        -translate-y-15
      "
      />

      <img
      src="/AWAN 2.png" //kanan
      className="
        md:hidden
        absolute
        top-0
        right-0
        w-[180px]
        scale-120
        h-auto
        object-contain
        pointer-events-none
        translate-x-6
        -translate-y-13
        "
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-12 items-center">

        {/* ================= FOTO + FRAME ================= */}
        <div
          className="
            relative
            z-20
            w-full
            max-w-[220px]        /* ⬅ MOBILE: lebih kecil */
            md:max-w-[420px]     /* ⬅ DESKTOP: TETAP */
            mx-auto
            lg:ml-0
            translate-x-[6px]
            translate-y-6
            md:translate-y-10
          "
        >
          <div className="relative w-full aspect-[371/291] md:w-[371px] md:h-[291px]">

            {/* AWAN 3 MOBILE */}
            <img
              src="/AWAN 3.png"
              className="
                md:hidden
                absolute
                -z-30
                w-[260px]
                scale-200
                h-auto
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                translate-x-22
                -translate-y-2
                rotate-[0deg]
                pointer-events-none
              "
            />

            {/* FRAME BIRU */}
            <div
              className="
                absolute
                inset-0
                bg-[#88BFD2]
                rotate-[-6deg]
                -translate-x-0
                -translate-y-0
                md:w-[387px]
                md:h-[303px]
                md:rotate-[-3deg]
                md:-translate-x-3
                md:-translate-y-[1px]
              "
            />

            {/* FRAME HIJAU */}
            <div
              className="
                absolute
                inset-0
                bg-[#89B19C]
                rotate-[4deg] md:rotate-[2deg]
                translate-x-0
                translate-y-0.5
                md:w-[387px]
                md:h-[303px]
                md:-translate-x-[10px]
              "
            />

            {/* FOTO */}
            <img
              src="/FOTO ABTS.png"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              className="
                relative
                z-10
                w-full
                h-full
                object-cover
                shadow-xl
                border-[4px]
                border-[#F2D7D7]
              "
            />
          </div>
        </div>

        {/* ================= TEKS ================= */}
        <div className="max-w-xl relative translate-y-0 md:translate-y-15">
          <h4
            style={{ WebkitTextStroke: " #ECF5F0", textShadow: "0px 3px 3px #535353" }}
            className="
              text-[#1E2625]
              text-2xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mb-6
              text-center
              md:text-justify
              md:-translate-x-20
              lg:-translate-x-40
            "
          >
            Tentang Gamaftr
          </h4>

          <div className="relative p-4 md:p-6">
            {/* AWAN 3 DESKTOP (AMAN, TIDAK DIUBAH) */}
            <img
              src="/AWAN 3.png"
              className="hidden md:block absolute top-0 left-0 w-auto h-full object-cover translate-x-35 -translate-y-58 max-w-none scale-80"
            />

            {/* DESKRIPSI — TIDAK DIUBAH */}
            <div className="
              relative
              z-10
              space-y-4
              w-[98%]
              mx-auto
              md:w-[125%]
              lg:w-[140%]
              px-1
              md:px-0
              text-justify
              -mt-6             /* ⬅ mobile: naik */
              md:mt-0            /* ⬅ desktop: BALIK NORMAL */
              md:-translate-x-20
              lg:-translate-x-45
            ">
              <p className="text-[#1B2D33] font-sans font-bold leading-relaxed text-[12px] md:text-lg lg:text-xl">
                Merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau
                Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA
                di Provinsi Riau.
              </p>
              <p className="text-[#1B2D33] font-sans font-bold leading-relaxed text-[12px] md:text-lg lg:text-xl">
                GAMAFTR diinisiasikan untuk memperkenalkan Universitas Gadjah Mada (UGM)
                kepada siswa dan siswi SMA/sederajat di Provinsi Riau.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
