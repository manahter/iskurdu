const headID = 'ctl04_ctlGridAcikIslerListeDetail_';

const extID = {
  employmentStatus: 'ctlCalismaSekliDL',
  employerType: 'ctlIsverenTurDL',
  employer: 'ctlIsverenDL',
  numOfHires: 'Label9',
  deadline: 'ctlSonBasvuruTarihi',
  calismaYeri: 'ctlCalismaYeriDL',
};

const parseWorks = doc => {
  // İşkur HTML sayfasından işleri çözümler
  const items = doc.querySelectorAll('tr td div a');

  return items.reduce((aku, item) => {
    // Başı şununla başlayan öğeleri al
    if (item.id.startsWith('ctl04_ctlGridAcikIslerListeDetail_')) {
      // Öğenin ctl numarasını al
      const ctlNo = item.id.split('_')[2];

      const o = {
        flag: item.id.split('_')[4],
        title: item.childNodes[0].childNodes[0].rawText,
      };

      for (const query of Object.keys(extID)) {
        o[query] = doc.querySelectorAll(
          `#${headID}${ctlNo}_${extID[query]}`,
        )[0].childNodes[0].rawText;
      }

      // Son başvuru süresini Timestamp'e çeviriyoruz
      const parts = o.deadline.split('.');

      o.deadline =
        parts.length > 2
          ? Date.parse(`${parts[2]}-${parts[1]}-${parts[0]} 23:59:59`)
          : new Date().now();

      // Engellilik durumu
      if (doc.querySelectorAll(`#${headID}${ctlNo}_ctlEngelGif`).length > 0) {
        o.hasDisorder = true;
      }

      // Çalışma yeri
      o.calismaYeri = o.calismaYeri.split(':')[1].replace(')', '').split(' / ');
      o.il = o.calismaYeri[0].trim();
      o.ilce = o.calismaYeri[1].replace(o.il, '');
      delete o.calismaYeri;

      // İşveren -> Üye girişi yapmadınızları eliyoruz.
      if (o.employer.search('Üye') > -1) o.employer = '';

      aku.push(o);
    }

    return aku;
  }, []);
};

export default parseWorks;
