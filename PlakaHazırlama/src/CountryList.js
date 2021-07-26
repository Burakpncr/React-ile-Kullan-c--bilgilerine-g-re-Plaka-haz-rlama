import React, { Component } from 'react';
import TextInput from './TextInput'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import SaveButton from './SaveButton';

class CountryList extends Component {
  state = {
    adSoyad: "",
    dropdownTitle: "ÜLKELER",
    dropdownTitle2: "ŞEHİRLER",
    liste: [],
    ulkekısaltma: "",
    plakayazi: "",
    adiSoyadi: "",
    liste2: [],
    countrysList: [
      { id: 1, country: "TÜRKİYE", flag: "tr flag", ulkekısaltma: "TR" },
      { id: 2, country: "KIBRIS", flag: "cy flag", ulkekısaltma: "KI" },
      { id: 3, country: "YUNANİSTAN", flag: "gr flag", ulkekısaltma: "YU" },
      { id: 4, country: "BULGARİSTAN", flag: "bg flag", ulkekısaltma: "BU" },
      { id: 5, country: "ÖZBEKİSTAN", flag: "uz flag", ulkekısaltma: "ÖZ" },
    ],
    cityList: [
      { id: 1, city: "İzmir", plaka: "35" },
      { id: 1, city: "İstanbul", plaka: "34" },
      { id: 1, city: "Ankara", plaka: "06" },
      { id: 2, city: "Baf", plaka: "01" },
      { id: 2, city: "Güzelyurt", plaka: "02" },
      { id: 2, city: "Lefkoşa", plaka: "03" },
      { id: 3, city: "Atina", plaka: "04" },
      { id: 3, city: "Selanik", plaka: "05" },
      { id: 3, city: "Kavala", plaka: "07" },
      { id: 4, city: "Sofya", plaka: "08" },
      { id: 4, city: "Varna", plaka: "09" },
      { id: 4, city: "Filibe", plaka: "10" },
      { id: 5, city: "Semerkand", plaka: "11" },
      { id: 5, city: "Buhara", plaka: "12" },
      { id: 5, city: "Taşkent", plaka: "13" },

    ]
  }

  inputChanged = (e) => {
    this.setState({
      adSoyad: e.target.value
    })
    var bul = this.state.adSoyad;
    bul = e.target.value
    var ad = bul.charAt(0)
    var soyadboslukbul = bul.lastIndexOf(" ")
    var soyad = bul.charAt(soyadboslukbul + 1)
    var birlestir = ad + soyad
    var tambirlestir = birlestir.toUpperCase()

    this.setState({
      adiSoyadi: tambirlestir
    })

  }


  DropdownCountryOnClick = (country, id, ulkekısaltma, e) => {
    e.preventDefault();
    var list = [];
    var ulkekısaltma;

    this.setState({
      dropdownTitle: country
    })
    this.state.cityList.forEach((item, index) => {
      if (item.id === id) {
        list.push(item);
      }
      this.setState({
        liste: list,
      })
      if (item.id !== id) {
        this.setState({
          dropdownTitle2: "ŞEHİRLER",
          plakayazi: "",
          ulkekısaltma: ""
        })
      }

    });
    this.state.countrysList.forEach(item => {
      if (item.id === id) {
        this.setState({
          ulkekısaltma: ulkekısaltma
        })
      }

    });


  }

  DropdownCityOnClick = (city, id, plaka, e) => {
    e.preventDefault();
    var plakayazim;

    this.setState({
      dropdownTitle2: city
    })
    this.state.cityList.forEach(item => {
      if (item.id === id) {
        plakayazim = plaka
      }
    });
    this.setState({
      plakayazi: plakayazim
    })
  }

  SaveButton = (e) => {
    e.preventDefault();
    const { plakayazi, ulkekısaltma, adiSoyadi } = this.state
    var list2 = [];
    if (plakayazi && ulkekısaltma && adiSoyadi) {
      list2 = this.state.liste2;
      list2.push(plakayazi + " " + ulkekısaltma + " " + adiSoyadi)

      this.setState({
        liste2: list2,

        adSoyad: "",
        dropdownTitle: "ÜLKELER",
        dropdownTitle2: "ŞEHİRLER",
        adiSoyadi: "",
        plakayazi: "",
        ulkekısaltma: "",
      })
    }
    else {
      alert("Lütfen Gerekli Alanları Doldurunuz")
    }
  }


  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            <h1 style={{ textAlign: "center" }}>ÜLKE LİSTESİ</h1>
          </div>
          <div class="card-body">
            <form>
              <div>
                <label> KULLANICI AD SOYAD : </label>
                <TextInput className="form-control" type="text" value={this.state.adSoyad} name="adSoyad" onChange={this.inputChanged} />
              </div>
              <br />
              <div>
                <label>ÜLKELER</label>
                <DropdownButton id="dropdown-item-button" title={this.state.dropdownTitle}>
                  {
                    this.state.countrysList.map(item => {
                      return (
                        <Dropdown.Item onClick={this.DropdownCountryOnClick.bind(this, item.country, item.id, item.ulkekısaltma)} as="button"> <i class={item.flag}></i> {item.country}</Dropdown.Item>
                      )
                    })
                  }
                </DropdownButton> </div>
              <div style={{ marginTop: "-60px", marginLeft: "200px" }}>
                <label>ŞEHİRLER</label>
                <DropdownButton id="dropdown-item-button" title={this.state.dropdownTitle2}>
                  {
                    this.state.liste.map(item => {
                      return (
                        <Dropdown.Item onClick={this.DropdownCityOnClick.bind(this, item.city, item.id, item.plaka)} as="button">{item.city}</Dropdown.Item>
                      )
                    })
                  }
                </DropdownButton>

              </div>
              <br />
              <div style={{ marginTop: "-45px", marginLeft: "450px" }} >
                <TextInput disabled="false" value={this.state.plakayazi} /><TextInput disabled="false" value={this.state.ulkekısaltma} /><TextInput disabled="false" value={this.state.adiSoyadi} />
              </div>
              <div style={{ marginTop: "100px" }}>
                <SaveButton className="btn btn-dark btn-block" type="submit" name="KAYDET" onClick={this.SaveButton} />
              </div>
              <br />
              <div>
                <ul class="list-group">
                  {
                    this.state.liste2.map(item => {
                      return (
                        <li class="list-group-item">{item}</li>
                      )
                    })
                  }
                </ul>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CountryList;