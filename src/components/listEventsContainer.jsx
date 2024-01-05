export default function ListEventsContainer({
  data,
  eventToGo,
  updateEventsToGo,
  userUid,
  setData,
  typeEvent,
  documentoHijoRef,
}) {
  const events = [];
  eventToGo.map((value) => events.push(value.newEvent));
  return (
    <>
      <h2 className="ms-4">{typeEvent}</h2>
      <div className="d-flex gap-3 m-4">
        {data ? (
          Object.keys(data).map((event) => {
            return (
              <div
                className="eventContainer col-3 d-flex flex-column"
                key={data[event].title}
              >
                <img
                  className="img-card w-100"
                  src="public\images\plants-7722970_1920.jpg"
                ></img>
                <p className="title-event-card mt-2">{data[event].title}</p>
                <p>{data[event].place}</p>
                <p className="description-event-card mb-5">
                  {data[event].description}
                </p>
                <span>Asistentes {data[event].assistants}</span>
                <span>{data[event].hourStart}</span>
                <span className="float-end">{data[event].date}</span>
                <button
                  id={event}
                  className="d-block"
                  onClick={() =>
                    updateEventsToGo(
                      event,
                      documentoHijoRef,
                      data,
                      userUid,
                      setData,
                      typeEvent
                    )
                  }
                >
                  {events.includes(data[event].uid)? "No voy":"Voy"}
                </button>
              </div>
            );
          })
        ) : (
          <p>no hay eventos</p>
        )}
      </div>
    </>
  );
}
