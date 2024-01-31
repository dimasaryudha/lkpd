        //1
        let name = 'dimas';
        let gajiinti = 10000000;
        let tunjangan = 0.2 * gajiinti;
        let pajak = 0.15 * tunjangan;
        let gajibersih = gajiinti + tunjangan - pajak;
        document.write(`nama karyawan : ${name}<br> tunjangan : ${tunjangan}<br> pajak : ${pajak} <br> gaji bersih: ${gajibersih} `)

        //2
        let jked = 1*3600;
        let mked = 30*60;
        let d = 1;

        let waktu = jked + mked + (40*d);

        console.log(waktu)

        //3
        let totaldetik = 36306;
        let jam = totaldetik / 3600 | 0;
        let sisadetik = totaldetik % 3600| 0;
        let menit = sisadetik /60 |0;
        let detik = sisadetik % 60;

        console.log(`${jam} jam ${menit} menit ${detik} detik`)