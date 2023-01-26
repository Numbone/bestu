import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { cdekCities, cdekOffice, cdekRegions } from '../../api/cdek'
import './CdekCountry.css'
import { AiOutlineClose } from "react-icons/ai"
const CdekCountry = ({ counrtyCode,active,setActive }) => {
    const [cdekRegion, setCdekRegion] = useState([])
    const [regionCode, setRegionCode] = useState(0)
    const [getRegionData, setGetRegionData] = useState([])
    const [cityCode, setCityCode] = useState(0)
    const [getOffice, setGetOffice] = useState([])
    const [allData, setAllData] = useState()
    const getCdekRegion = async () => {
        const { data } = await cdekRegions(counrtyCode)
        setCdekRegion(data)
    }
    const getCdekCities = async () => {
        const { data } = await cdekCities(regionCode)
        setGetRegionData(data)
    }
    const getCdekOffice = async () => {
        const { data } = await cdekOffice(cityCode)
        setGetOffice(data)
    }
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };
    useEffect(() => {
        getCdekRegion()
        if (regionCode != 0) {
            getCdekCities()
        }
        if (cityCode != 0) {
            getCdekOffice()
        }
    }, [counrtyCode, regionCode, cityCode])
    console.log(allData, "////Alldata")
    return (
        <div className='box_container'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div className='country_text'>
                    <h3>Доставка СДЭК</h3>
                </div>
                <div onClick={()=>setActive(false)}>
                    <AiOutlineClose />
                </div>
            </div>

            <div className="form-field mt-3">
                <label for="cdek-region" class="label-input mb-2" >Регион</label>
                <select id='cdek-region' class="form-select">
                    <option disabled="true" selected="true">Выбрать...</option>
                    {
                        cdekRegion?.map(item =>
                            <option onClick={() => setRegionCode(item?.region_code)}>
                                {item?.region}
                            </option>
                        )
                    }

                </select>
            </div>
            {
                regionCode != 0
                    ?
                    <div className="form-field mt-3">
                        <label for="cdek-region" class="label-input mb-2" >Город</label>
                        <select id='cdek-region' class="form-select">
                            <option disabled="true" selected="true">Выбрать...</option>
                            {
                                getRegionData?.map(item =>
                                    <option onClick={() => setCityCode(item?.code)} >
                                        {item?.city}
                                    </option>
                                )
                            }

                        </select>
                    </div>
                    : null
            }
            {
                cityCode != 0
                    ?
                    <div className="form-field mt-3">
                        <label for="cdek-region" class="label-input mb-2" >Пункт самовывоза</label>
                        <select id='cdek-region' class="form-select">
                            <option disabled="true" selected="true">Выбрать...</option>
                            {
                                getOffice?.map(item =>
                                    <option onClick={() => setAllData(item?.location)}>
                                        {item?.name}
                                    </option>
                                )
                            }

                        </select>
                    </div>
                    :
                    null
            }
            {
                allData != undefined
                    ? <YMaps>
                        <Map defaultState={{
                            center: [55.751574, 37.573856],
                            zoom: 2,
                        }}
                            width={"85vw"}
                            height={400}>
                            <Placemark geometry={[allData?.latitude, allData?.longitude]} />
                        </Map>
                    </YMaps>
                    : null
            }

        </div>
    )
}

export default CdekCountry