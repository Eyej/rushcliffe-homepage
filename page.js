function displayContent(event) {
  //   console.log(event);
  //   alert("Hiya!");
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
paneltab2.addEventListener("click", displayContent);
