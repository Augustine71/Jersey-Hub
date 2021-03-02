import React from "react";

function OrderSummary({jersey, accessory, jerseyrate,jerseyQty, jerseyamount,accessoryprice,totalprice}) {
    return(
        <div className="summary">
            <div className="receipt">
                <h2> Order Summary</h2>
            </div>
            
            <div className="details">
                <div className="headingdetails">
                    <div className="itemname">
                        <h4>Item Name</h4>
                    </div>
                    <div className="rate">
                    <h4>Rate</h4>
                    </div>
                    <div className="Qty">
                    <h4>Qty</h4>
                    </div>
                    <div className="amount">
                    <h4>Amount</h4>
                    </div>
                 </div>

                 <div className="jerseydetails">
                     <div className="jerseyname">
                         {jersey}
                     </div>
                     <div className="jerseyrate">
                          {jerseyrate}
                     </div>
                     <div className="jerseyQty">
                         {jerseyQty}
                     </div>
                     <div className="jerseyamount">
                         {jerseyamount}
                     </div>
                 </div>

                {(accessory==="None")
                  ? <div> </div>
                  : <div className="accessorydetails">
                    <div className="accessoryname">
                        {accessory}
                    </div>
                    <div className="accessoryprice">
                        {accessoryprice}
                    </div>
                </div>}

                <hr className="horizontal"/>

                <div className="pricedetails">
                    <div className="subtotal">
                        Sub Total
                    </div>
                    <div className="jerseyprice">
                        {totalprice}
                    </div>
                </div>

                <div className="gstdetails">
                    <div className="gst">
                      GST 5%
                    </div>
                    <div className="gstprice">
                        {.05*totalprice}
                    </div>
                </div>
                
                <div className="totaldetails">
                    <div className="grandtotal">
                      Grand Total
                    </div>
                    <div className="grandprice">
                        {.05*totalprice+totalprice}
                    </div>
                </div>
            </div>
            </div>

      
    )

}

export default OrderSummary;