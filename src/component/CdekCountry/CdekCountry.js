import { Map, ObjectManager, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { all } from "axios";
import React, { useEffect, useState } from "react";
import { cdekCities, cdekOffice, cdekRegions } from "../../api/cdek";
import "./CdekCountry.css";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import ph from "../../img/button.png"
const CdekCountry = ({ counrtyCode, active, setActive, setCdek }) => {
  const [cdekRegion, setCdekRegion] = useState([]);
  const [regionCode, setRegionCode] = useState(0);
  const [getRegionData, setGetRegionData] = useState([]);
  const [cityCode, setCityCode] = useState(0);
  const [getOffice, setGetOffice] = useState([]);
  const [allData, setAllData] = useState(undefined);
  const [map, setMap] = useState([55.75, 37.57]);
  const getCdekRegion = async () => {
    const { data } = await cdekRegions(counrtyCode);
    setCdekRegion(data);
  };
  const getCdekCities = async () => {
    const { data } = await cdekCities(regionCode);
    setGetRegionData(data);
    setMap([data?.[0]?.latitude?.toFixed(2), data?.[0]?.longitude?.toFixed(2)]);
  };
  const getCdekOffice = async () => {
    const { data } = await cdekOffice(cityCode);
    setGetOffice(data);
  };
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  useEffect(() => {
    getCdekRegion();
    if (regionCode != 0) {
      getCdekCities();
    }
    if (cityCode != 0) {
      getCdekOffice();
    }
    if (allData != undefined) {
      setCdek(allData);
      setActive(false);
    }
  }, [counrtyCode, regionCode, cityCode, allData]);
  console.log(getOffice, "////getOffice");
  console.log(getRegionData, "////getRegionData");
  return (
    <div className="box_container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="country_text">
          <h3>Доставка СДЭК</h3>
        </div>
        <div onClick={() => setActive(false)}>
          <AiOutlineClose />
        </div>
      </div>

      <div className="form-field mt-3">
        <label for="cdek-region" className="label-input mb-2">
          Регион
        </label>
        <Select
          placeholder={""}
          options={cdekRegion}
          onChange={(e) => setRegionCode(e?.region_code)}
          getOptionLabel={(status) => status?.region}
          getOptionValue={(status) => status?.region_code}
          theme={(theme) => ({
            ...theme,
            borderRadius: "4px",
            colors: {
              ...theme.colors,
              primary25: "#e7dbe2",
              primary: "black",
            },
          })}
          styles={{
            container: (base) => ({
              ...base,
              height: "48px",
              marginTop: "20px",
            }),
            control: (base, { isFocused }) => ({
              ...base,
              height: "48px",
              border: isFocused && "inherit",
            }),
            valueContainer: (base) => ({
              ...base,
              height: "48px",
            }),
            indicatorsContainer: (base) => ({
              display: "none",
            }),
          }}
        />
      </div>
      {regionCode != 0 ? (
        <div className="form-field mt-3">
          <label htmlFor="1" className="label-input mb-2">
            Город
          </label>
          <Select
            placeholder={""}
            options={getRegionData}
            onChange={(e) => setCityCode(e?.code)}
            getOptionLabel={(status) => status?.city}
            getOptionValue={(status) => status?.code}
            theme={(theme) => ({
              ...theme,
              borderRadius: "4px",
              colors: {
                ...theme.colors,
                primary25: "#e7dbe2",
                primary: "black",
              },
            })}
            styles={{
              container: (base) => ({
                ...base,
                height: "48px",
                marginTop: "20px",
              }),
              control: (base, { isFocused }) => ({
                ...base,
                height: "48px",
                border: isFocused && "inherit",
              }),
              valueContainer: (base) => ({
                ...base,
                height: "48px",
              }),
              indicatorsContainer: (base) => ({
                display: "none",
              }),
            }}
          />
        </div>
      ) : null}
      {cityCode != 0 ? (
        <div className="form-field mt-3">
          <label for="cdek-region" className="label-input mb-2">
            Пункт самовывоза
          </label>
          <Select
            placeholder={""}
            options={getOffice}
            onChange={(e) => setAllData(e)}
            getOptionLabel={(status) => status?.name}
            getOptionValue={(status) => status?.name}
            theme={(theme) => ({
              ...theme,
              borderRadius: "4px",
              colors: {
                ...theme.colors,
                primary25: "#e7dbe2",
                primary: "black",
              },
            })}
            styles={{
              container: (base) => ({
                ...base,
                height: "48px",
                marginTop: "20px",
              }),
              control: (base, { isFocused }) => ({
                ...base,
                height: "48px",
                border: isFocused && "inherit",
              }),
              valueContainer: (base) => ({
                ...base,
                height: "48px",
              }),
              indicatorsContainer: (base) => ({
                display: "none",
              }),
            }}
          />
        </div>
      ) : null}
      <div style={{display:'flex',justifyContent:'center',width:'100%'}}>

      
      {getOffice.length != 0 ? (
        <YMaps>
          <Map
            defaultState={{
              center: map,
              zoom: 11,
            }}
            width={534}
            height={400}
          >
            {getOffice.map((item) => (
              <>
                <Placemark
                  onClick={() => console.log(item?.code)}
                  geometry={[
                    item?.location?.latitude,
                    item?.location?.longitude,
                  ]}
                  options={
                    {
                      balloonMinWidth:40,
                      balloonAutoPanMargin:10
                    }
                  }
                  // options={
                  //   {
                  //     balloonContent: "Это красивая метка",
                  
                  //     // Опции.
                  //     // Необходимо указать данный тип макета.
                  //     // iconLayout: "default#image",
                  //     // Своё изображение иконки метки.
                  //     // iconImageHref: {ph},
                  //     // Размеры метки.
                  //     // iconImageSize: [30, 42],
                  //     // Смещение левого верхнего угла иконки относительно
                  //     // её "ножки" (точки привязки).
                  //     // iconImageOffset: [-5, -38],
                  //   }
                  // }
                />
              </>
            ))}
          </Map>
        </YMaps>
      ) : null}
      </div>
    </div>
  );
};

export default CdekCountry;
