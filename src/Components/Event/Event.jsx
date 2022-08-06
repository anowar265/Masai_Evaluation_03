// This is an event details page which has its own route

export const Event = () => {
  return (
    <div className="eventContainer">
      {/* add your children here (divs)
        ex : title, theme, description, date, time, location, image(optional)
        the classNames should be also : title, theme, description, date, time, location, image(optional)
        */}

      <div className="title"></div>
      <div className="theme"></div>
      <div className="description"></div>
      <div className="date"></div>
      <div className="time"></div>
      <div className="location"></div>

      {/* only one of the buttons should be visible depending on the status of subcription
        Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => {}}>
        Subscribe
      </button>
    </div>
  );
};
