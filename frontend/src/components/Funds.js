import React from 'react'

const Funds = () => {
  const data = [
    { label: 'Available margin', value: '4,043.10' },
    { label: 'Used margin', value: '3,757.30' },
    { label: 'Available cash', value: '4,043.10' },
    'divider',
    { label: 'Opening Balance', value: '4,043.10' },
    { label: 'Opening Balance', value: '3736.40' },
    { label: 'Payin', value: '4064.00' },
    { label: 'SPAN', value: '0.00' },
    { label: 'Delivery margin', value: '0.00' },
    { label: 'Exposure', value: '0.00' },
    { label: 'Options premium', value: '0.00' },
    'divider',
    { label: 'Collateral (Liquid funds)', value: '0.00' },
    { label: 'Collateral (Equity)', value: '0.00' },
    { label: 'Total Collateral', value: '0.00' },
  ];
  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-6'></div>
        <div className='col-6 g-2 text-start'>
          <span className='text-muted ms-2' style={{ fontSize: "12px" }}>Instant, zero-cost fund transfers with UPI</span>
          <span className='ms-2'><button className='p-3 bg-primary text-white border-0 rounded'>Add Funds</button></span>
          <span className='ms-2'><button className='p-3 bg-primary text-white border-0 rounded'>Withdraw</button></span>

        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-4'>
          <p className='text-muted fs-4 fw-lighter' >Equity</p>
          <div className="border p-4" style={{ width: 'fit-content', fontSize: '14px', color: '#555' }}>
            {data.map((item, index) =>
              item === 'divider' ? (
                <hr key={index} />
              ) : (
                <div key={index} className="d-flex justify-content-between mb-2 p-2">
                  <span className='text-muted'>{item.label}</span>
                  <span className="fw-light">{item.value}</span>
                </div>
              )
            )}
          </div>

        </div>
        <div className='col-4'>

        </div>
        <div className='col-4 d-flex justify-content-center flex-column  align-items-center'>
          <p>You don't have any commodity</p>
          <button className='p-3 bg-primary text-white border-0 rounded' style={{width:"150px"}}>Add Funds</button>
        </div>
      </div>
    </div>
  )
}

export default Funds
