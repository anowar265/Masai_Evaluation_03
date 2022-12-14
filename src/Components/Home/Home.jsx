import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/users?interests=${id}`
    );
    setItem([...data]);
  };
  return (
    <div className="homeContainer">
      {item
        .filter((el) => {}) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`/meetup/${id}`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
              <div className="title">{el.title}</div>
              <div className="theme">{el.theme}</div>
              <div className="description">{el.description}</div>
              <div className="date">{el.date}</div>
              <div className="time">{el.time}</div>
              <div className="location">{el.location}</div>
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[].map((el) => {
            return (
              <Link to={`add route here`} className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
