import React, { useEffect, useState } from "react";

const Applications = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/api/applications/")
      .then(res => res.json())
      .then(data => {
        setApps(data);
        console.log("Заявки:", data);
      })
      .catch(err => {
        console.error("Ошибка при загрузке заявок:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Заявки с сайта</h1>
      {apps.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Ответы</th>
            </tr>
          </thead>
          <tbody>
            {apps.map(app => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>
                  {(() => {
                    try {
                      const answers = JSON.parse(app.data);
                      return (
                        <ul style={{ paddingLeft: "1em", margin: 0 }}>
                          {answers.map((item, i) => (
                            <li key={i}>
                              <strong>{item.question}</strong>:{" "}
                              {Array.isArray(item.answer)
                                ? item.answer.join(", ")
                                : item.answer}
                            </li>
                          ))}
                        </ul>
                      );
                    } catch (e) {
                      return <i>Ошибка в формате данных</i>;
                    }
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Applications;