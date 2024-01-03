export default function TopEventsContainer({topEvents}){
    return(
        <>
        <p className="fs-4 col-12 text-center">Top Eventos</p>
        <div className="d-flex">
          <div className="col-12 d-flex flex-wrap gap-3 justify-content-center text-center">
            {topEvents
              ? topEvents.map((value) => {
                  let key = Object.keys(value);
                  return (
                    <div
                      className="top-event-container d-flex flex-column col-4 justify-content-center"
                      key={value[key[0]].uid}
                    >
                      <div className="img-event"></div>
                      <div className="info-top-event-container d-flex flex-column align-content-center">
                        <p className="title-event-card mt-2">
                          {value[key[0]].title}
                        </p>
                        <p>{value[key[0]].place}</p>
                        <div className="d-flex justify-content-center align-items-center h-100">
                        <p className="description-event-card">
                          {value[key[0]].description}
                        </p>
  </div>
                        <div className="info-top-event-time d-flex flex-column justify-content-end mb-3 gap-1">
                          <span>Asistentes {value[key[0]].assistants}</span>
                          <span className="float-start">
                            {value[key[0]].hourStart}
                          </span>
                          <span className="float-end">{value[key[0]].date}</span>
                        </div>
                      </div>
                      <div className="type-event d-flex justify-content-center align-items-center">
                        {value[key[0]].category}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </>
    )
}