function displayTab2Content() {
  paneltab2Content.innerHTML = `<div class="clearfix panel">
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1073&k=74D43F4782C58538C0E4055E7BBF67214853A662">Report a missed bin</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www3.nottinghamshire.gov.uk/thecouncil/contact/tellusonce/">Tell us once service</a> 
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=340%20">Council Tax - moving house</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a title="Link: Request street cleaning"
                    href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1200&k=DAC059D06088183EC849D06C57D12391C66CDF61">Request street cleaning</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a title="Report Litter"
                    href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1075&k=85D5056FAE214544A8805970846E098284F9F6D1">Report Litter</a>
            </li>
            
        </ul>
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=91"
                    >Contact us -general enquiries form</a>&nbsp;
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a title="Link: Report anti-social behavior"
                    href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1082&k=E8850E76E3930B07BC6B850A8491B6183254B69B">Report
                    anti-social behavior </a>&nbsp;
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a title="Link: Report dog fouling"
                    href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1086&k=2F9C03B0D1AFDEB6607817D8321ECE886688BF0F">Report
                    dog fouling</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1163&k=962011DF093A8AE893C620CA096C3BE810A7E5AD">Report an issue with a playground</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1084&k=8C02E5843631DB1B852919346209B6D24EBE6F33">Request help putting bin out</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.nottinghamshire.gov.uk/travelling/roads/road-design-and-maintenance/report-road-problems/">Report a pothole issue</a>
            </li>
        </ul>
</div>
<div class="tabContentBottom clearfix">
    <ul class="panel panelList">
        <li>
            <span class="tcbIcon"><i class="fas fa-angle-right fa-2x "></i></span>
            <a href="https://www.rushcliffe.gov.uk/doitonline/#d.en.2579">See more services</a>
        </li>
        <li>
            <span class="tcbIcon2"><i class="fas fa-mouse fa-2x "></i></span>
            <a href="https://eserv.rushcliffe.gov.uk/self-serve/kiosk.asp" class="floatLeft">Save time, do it
                online</a>
        </li>
    </ul>
    <!-- <div class="clearing"></div> -->
</div>`;
}
let paneltab2 = document.querySelector("#tab2");
let paneltab2Content = document.querySelector("#tellUs");
paneltab2.addEventListener("click", displayTab2Content);

// display tab3content
function displayTab3Content() {
  paneltab3Content.innerHTML = `<div class="clearfix panel">
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.rushcliffe.gov.uk/counciltax/paycounciltax/">Council Tax</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.nottinghamshire.gov.uk/transport/parking/pay-a-parking-fine">Pay a parking fine</a> 
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.civicaepay.co.uk/Rushcliffe/webpay_public/webpay/default.aspx?fund=09">Business rates</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.civicaepay.co.uk/Rushcliffe/webpay_public/webpay/default.aspx?fund=21">Facilities hire</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://selfservice.rushcliffe.gov.uk/renderform.aspx?t=1248&k=18715E15F9236B31EAF237744A469435EC645D15">Pay your garden waste bin</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.civicaepay.co.uk/Rushcliffe/webpay_public/webpay/default.aspx?fund=21">Temporary events notice</a>
            </li>
        </ul>
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=91"
                    >Contact us -general enquiries form</a>&nbsp;
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=299">Planning fees</a>&nbsp;
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.rushcliffe.gov.uk/homealarms/">Home alarms</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.civicaepay.co.uk/Rushcliffe/webpay_public/webpay/default.aspx?fund=21">Direct debit: Council tax/ Business rates</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.civicaepay.co.uk/Rushcliffe/webpay_public/webpay/default.aspx?fund=05">Pay your invoice online</a>
            </li>
        </ul>
</div>
<div class="tabContentBottom clearfix">
    <ul class="panel panelList">
        <li>
            <span class="tcbIcon"><i class="fas fa-angle-right fa-2x "></i></span>
            <a href="https://www.rushcliffe.gov.uk/doitonline/#d.en.2579">See more services</a>
        </li>
        <li>
            <span class="tcbIcon2"><i class="fas fa-mouse fa-2x "></i></span>
            <a href="https://eserv.rushcliffe.gov.uk/self-serve/kiosk.asp" class="floatLeft">Save time, do it
                online</a>
        </li>
    </ul>
</div>`;
}

let paneltab3 = document.querySelector("#tab3");
let paneltab3Content = document.querySelector("#pay");
paneltab3.addEventListener("click", displayTab3Content);

// display tab4content
function displayTab4Content() {
  paneltab4Content.innerHTML = `<div class="clearfix panel">
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=343">Apply for a job online</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.planningportal.co.uk/">Planning permission</a> 
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://rushcliffeclaims.teamnetsol.com/index.jsp">Housing benefit and Council tax reduction</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://eserv.rushcliffe.gov.uk/formsmaster/public/showform.asp?fm_fid=151">Freedom of Information request</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.home-search.org.uk/Data/ASPPages/1/30.aspx">Find somewhere to live - Homesearch</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.rushcliffe.gov.uk/media/1rushcliffe/media/documents/pdf/aboutus/corporateinformation/GDPR%20RBC%20Subject%20Access%20Request%20Form.pdf"
                    >Subject Access Request (3 - 124KB)</a>&nbsp;
            </li>
        </ul>
        <ul class="panelList">
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.rushcliffe.gov.uk/business/rulesandregulations/licensing/alcoholentertainmentandfood/a-zoflicenses/">Licensing</a>&nbsp;
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.nottinghamshire.gov.uk/travelling/travel/buses/concessionarytravel/">Bus passes</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.nottinghamshire.gov.uk/transport/parking/apply-for-residents-parking-permit">Residents parking permit</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="https://www.gov.uk/register-to-vote">Electoral Register</a>
            </li>
            <li class="panelItem">
                <span><i class="fas fa-angle-right panelListIcon"></i></span>
                <a href="http://www.businesslink.gov.uk/bdotg/action/blukLicenceLanding?r.l1=1075193162">Temporary events notice</a>
            </li>
        </ul>
</div>
<div class="tabContentBottom clearfix">
    <ul class="panel panelList">
        <li>
            <span class="tcbIcon"><i class="fas fa-angle-right fa-2x "></i></span>
            <a href="https://www.rushcliffe.gov.uk/doitonline/#d.en.2579">See more services</a>
        </li>
        <li>
            <span class="tcbIcon2"><i class="fas fa-mouse fa-2x "></i></span>
            <a href="https://eserv.rushcliffe.gov.uk/self-serve/kiosk.asp" class="floatLeft">Save time, do it
                online</a>
        </li>
    </ul>
    <!-- <div class="clearing"></div> -->
</div>`;
}

let paneltab4 = document.querySelector("#tab4");
let paneltab4Content = document.querySelector("#apply");
paneltab4.addEventListener("click", displayTab4Content);

// Adding a listener to be executed every time the cursor
// is moved over a different list item WIP

let promoList = document.getElementById("promoList");
let contentOne = document.querySelector("#promo1");
let contentTwo = document.querySelector("#promo2");
let contentThree = document.querySelector("#promo3");
let contentFour = document.querySelector("#promo4");

function addListener(elementID) {
  const element = document.querySelector(elementID);
  element.addEventListener("mouseover", focusOn(event, elementID));
}

function focusOn(event, elementID) {
  // Code to add/remove active class

  const element = document.querySelector(elementID);
  if (!["#p4", "#p2", "#p3", "#p1"].includes(element)) {
    document.querySelector("#p1").classList.remove("active");
    document.querySelector("#p2").classList.remove("active");
    document.querySelector("#p3").classList.remove("active");
    document.querySelector("#p4").classList.remove("active");
    if (!element.classList.contains("active")) {
      element.classList.add("active");
      displayContent(elementID);
    }
  } else {
    if (!element.classList.contains("active")) {
      element.classList.add("active");
      displayContent(elementID);
    }
  }
}

function displayContent(elementID) {
  if (elementID === "#p1") {
    contentOne.classList.remove("d-none");
    contentThree.classList.add("d-none");
    contentFour.classList.add("d-none");
    contentTwo.classList.add("d-none");
  } else if (elementID === "#p2") {
    contentOne.classList.add("d-none");
    contentThree.classList.add("d-none");
    contentFour.classList.add("d-none");
    contentTwo.classList.remove("d-none");
  } else if (elementID === "#p3") {
    contentOne.classList.add("d-none");
    contentThree.classList.remove("d-none");
    contentFour.classList.add("d-none");
    contentTwo.classList.add("d-none");
  } else if (elementID === "#p4") {
    contentOne.classList.add("d-none");
    contentThree.classList.add("d-none");
    contentFour.classList.remove("d-none");
    contentTwo.classList.add("d-none");
  }
}
