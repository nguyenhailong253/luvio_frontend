import {
  MuiTelInput
} from 'mui-tel-input'
import React from 'react'
import type {
  MuiTelInputInfo,
  MuiTelInputContinent
  ,
  MuiTelInputCountry
} from 'mui-tel-input'

interface MobilePhoneInputPropsType {
  onMobileValueChange: (value: string) => void
  mobilevalue: string
}

const MobilePhoneInput: React.FunctionComponent<MobilePhoneInputPropsType> = (props) => {
  const { mobilevalue, onMobileValueChange } = props
  const handleChange: any = (newValue: string, info: MuiTelInputInfo) => {
    console.log(info)
    onMobileValueChange(newValue)
  }

  const continents: MuiTelInputContinent[] = ['OC'] // INFO: https://viclafouch.github.io/mui-tel-input/docs/continent-codes/
  const preferredCountries: MuiTelInputCountry[] = ['AU', 'NZ']

  return (
    <MuiTelInput
      value={mobilevalue}
      onChange={handleChange}
      continents={continents}
      preferredCountries={preferredCountries}
      fullWidth
      defaultCountry='AU'
    />
  )
}

export default MobilePhoneInput
