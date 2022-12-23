export function Info() {
  let handleShowInfo = function () {
    $(this).toggleClass("open");
    info.find(".container").toggleClass("open");
  };
  let info = $(`
        <div class="info">
            <div class="container">
                <div class="content">
                    <h6>What to have in mind before getting started</h6>
                    <ul class="list-group">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Morbi leo risus</li>
                      <li class="list-group-item">Porta ac consectetur ac</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                </div>
                <button class="btn btn-info open btn-lg text-white" id="info"> 
                    <i class="fa fa-question" aria-hidden="true"></i> 
                </button>
        </div>
    `);

  info.find("#info").click(handleShowInfo);
  return info;
}
