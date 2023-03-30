const headID = 'ctl01_ctlIsIlanBilgileri_';
const extID = [
  'ctlGenelSartlar', // İş tanımı
  'ctlGenelSartlar2', // Nitelikler ve Beceriler
  'ctlOgrenimAsgari', // Öğrenim seviyesi alt
  'ctlOgrenimAzami', // Öğrenim seviyesi üst
  'repeaterMeslek_ctl01_ctlMeslekLabel', // Meslek
  'repeaterMeslek_ctl01_ctlMeslekDeneyimSuresiLabel', // Deneyim Suresi
  'repeaterOgrGenelFakulte_ctl01_ctlGenelBirimAdiLabel', // Genel Birim Adı
  'repeaterOgrGenelFakulte_ctl01_ctlGenelBolumAdiLabel', // Genel Bolum Adı
  'repeaterOgrGenelFakulte_ctl01_ctlGenelOgrenimSeviyesiLabel', // Öğrenim Seviyesi
];

// TODO Buraları biraz detaylandırayım. Tekrar baktığımda anlaşılır gelmedi.
const parseDetails = (doc, key) => {
  // İşkur HTML sayfasından iş detaylarını çözümler
  const items = doc.querySelectorAll(`#${headID}${key}`);

  try {
    // OKU -> İş Tanımı
    // OKU -> Nitelikler ve Beceriler
    if (Object.keys(items[0].childNodes[0]).some(i => i === 'tagName')) {
      return items.reduce((aku, item) => {
        aku += '\n' + jointRawTexts(item.childNodes).trim();
        return aku;
      }, '');
    } else {
      return items[0].childNodes[0].rawText;
    }
  } catch (error) {}
  return '';
};

const jointRawTexts = nodes => {
  return nodes.reduce((aku, node) => {
    try {
      aku += '' + node.rawText;
    } catch (error) {}
    return aku;
  }, '');
};

export default parseDetails;
