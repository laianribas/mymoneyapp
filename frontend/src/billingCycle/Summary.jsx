import React from 'react'
import Grid from '../common/layout/Grid'
import ValueBox from '../common/widget/valueBox'

const Summary = ({ credit, debt }) => {
  return (
    <Grid cols="12">
      <fieldset>
        <legend>Resumo</legend>
        <div className="container-fluid">
          <div className="row">
            <ValueBox
              cols="12 4"
              color="green"
              icon="piggy-bank"
              value={`R$ ${credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="funnel-dollar"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado"
            />
          </div>
        </div>
      </fieldset>
    </Grid>
  )
}

export default Summary
