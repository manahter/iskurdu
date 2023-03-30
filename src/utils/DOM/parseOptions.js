const trCharSet = [
  ['&#199;', 'Ç'],
  ['&#231;', 'ç'],
  ['&#214;', 'Ö'],
  ['&#246;', 'ö'],
  ['&#252;', 'ü'],
  ['&#220;', 'Ü'],
];

const parseOptions = (doc, key) => {
  // Şehirleri taşıyan Obj'nin ID'si ile Tag=option ile şehirlerin isim ve plakalarını taşıyan öğeleri al
  const items = doc.querySelectorAll(`#ctl04_ctl${key} option`);

  return items.reduce((akuList, item) => {
    if (!item.childNodes.length) return akuList;

    // Şehir adındaki bozuk karakterleri düzelt
    let itemName = trCharSet.reduce(
      (aku, char) => aku.replaceAll(char[0], char[1]),
      item.childNodes[0].rawText,
    );

    if (itemName === 'Tümü') itemName = `--Tüm ${key}--`;

    // ID'leri al
    akuList.push({
      value: item.rawAttrs.split('value="')[1].split('"')[0],
      label: itemName,
    });

    // Sadece sayıları alır:
    // item.rawAttrs.replace(/\D/g, '')

    return akuList;
  }, []);
};

export default parseOptions;
