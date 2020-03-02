

  const countToWoodstock = (year, month, day) => {
    const dateNow = new Date();
    const dateOfWoodstock = new Date(year, month, day);
    let diff = dateOfWoodstock.getTime() - dateNow.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days == 1) return "1 dzień";
    else return days + " dni";
  };

  export default countToWoodstock
