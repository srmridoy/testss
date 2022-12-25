// Dependencies
import React, { useEffect, useState } from "react"
import { Button, Card, Checkbox, Grid, InputAdornment, TextField, InputLabel, Table, MenuItem, FormControl, Select, List, ListItem, Menu } from '@material-ui/core';
// End Dependencies

// Additional Dependencies
// End Additional Dependencies

// Layout Components
import { PageTitle } from 'layout-components';
// End Layout Components

// Icons
// End Icons

import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone'
import RadioButtonCheckedTwoToneIcon from '@material-ui/icons/RadioButtonCheckedTwoTone'
// Additional Icons
// End Additional Icons

export default function /namePluralWithoutSpace/View() {
  // Constants
  const [/constantPlural/, set/constantPlural/] = useState([])
  const [settings, setSettings] = useState({
    page: 1,
    per_page: 10,
    total: 0,
    order: 'DESC',
    orderby: 'id'
  })
  const [filters, setFilters] = useState({})
  const [search, setSearch] = useState(null)
  const selected = /constantPlural/.filter(/constantSingular/ => /constantPlural/.selected === true)
  // End Constants

  // Functions
  const sync = () => {}
  const handleSettings = (name, value) => {
    setSettings({
      ...settings,
      [name]: value
    })
  }
  const handleFilters = () => {}
  const handlePagination = () => {}
  const handleSearch = () => {}
  const handleSelect = () => {}
  const handleDelete = () => {}
  // End Functions

  // Additional Functions
  // End Additional Functions
  
  console.log(settings)
  // Hooks
  useEffect(() => {
    sync()
  }, [])
  // End Hooks
  return (
    <>
      <PageTitle
        titleHeading="/namePlural/"
        titleDescription="/description/"
        titleIcon={</icon/Icon className="text-primary" />}
      />
      <List component="div" className="nav-neutral-first nav-pills-rounded flex-column p-2">
        <ListItem
          button
          onClick={() => handleSettings('name', 'adsfadf')}
        >
          <div className="mr-2">
            <RadioButtonCheckedTwoToneIcon />
          </div>
          <span className="font-size-md"><b>10</b> Currencies</span>
        </ListItem>
      </List>
    </>
  )
}
