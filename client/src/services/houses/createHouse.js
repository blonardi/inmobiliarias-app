export const createHouse = (e, houses) => {
  const form = e.target
  const newFormHouse = {
    id: houses.length + 1,
    price: form.housePrice.value,
    title: form.houseTitle.value,
    address: form.houseAddress.value,
    description: form.houseDescription.value,
    meters: form.houseDimention.value,
    type: form.houseType.value,
    location: form.houseLocation.value,
    realEstate: form.houseRealEstate.value,
    image: form.houseImage.files[0]
  }

  return newFormHouse
}
