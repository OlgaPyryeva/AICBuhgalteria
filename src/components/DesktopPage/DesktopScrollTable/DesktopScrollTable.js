import React from "react";

import Dropdown from "react-dropdown";

const DesktopScrollTable = ({ items }) => {
  const tableOptions = ["ИП", "Самозанятый"];

  return (
    <div className="scroll-table ">
      <table>
        <thead>
          <tr>
            <th>
              <Dropdown
                options={tableOptions}
                placeholder="Тип клиент"
                arrowClassName="tableArrowClassName"
                controlClassName="tableControlClassName"
                menuClassName="tableMenuClassName"
              ></Dropdown>
            </th>
            <th>
              <input placeholder="Наименование" className="tableInput"></input>
            </th>
            {items.map((itemsScrollTableThead) => (
              <>
                <th
                  className={itemsScrollTableThead.className}
                  colSpan={itemsScrollTableThead.colSpan}
                >
                  {itemsScrollTableThead.value}
                </th>
              </>
            ))}
          </tr>

          {/* <tr>
            <th>
              <Dropdown
                options={tableOptions}
                placeholder="Тип клиент"
                arrowClassName="tableArrowClassName"
                controlClassName="tableControlClassName"
                menuClassName="tableMenuClassName"
              ></Dropdown>
            </th>
            <th>
              <input placeholder="Наименование" className="tableInput"></input>
            </th>
            <th colSpan="2">Доходы</th>
            <th colSpan="2">Расходы</th>
            <th colSpan="2">Остаток денежных средств</th>
            <th colSpan="4">Всего ТН/ТТН Выписано/Внесено</th>
            <th colSpan="4">Позиций ТН/ТТН Выписано/Внесено</th>
            <th colSpan="2">Платежей Проведено</th>
            <th colSpan="3">Отчеты Подать/Принято/Отклонено</th>
            <th colSpan="4">Документы Выписано/Внесено</th>
            <th colSpan="2">Уведомления</th>
            <th>...</th>
          </tr> */}
        </thead>

        <tbody className="scroll-table-body">
          <tr>
            <td>ИП</td>
            <td>Васечкин В. П.</td>
            <td>201,15 BYN</td>
            <td className="tableRed">-18%</td>
            <td>201,15 BYN</td>
            <td className="tableGreen"> +18%</td>
            <td>201,15 BYN</td>
            <td className="tableGreen">+25%</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td className="tableGreen">3</td>
            <td className="tableGreen">3</td>
            <td className="tableGreen">3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
            <td className="tableGreen">+3</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Иванова Д. С.</td>
            <td>958,78 BYN</td>
            <td className="tableGreen">-18%</td>
            <td>958,78 BYN</td>
            <td className="tableRed">+18%</td>
            <td>958,78 BYN</td>
            <td className="tableGreen">+18%</td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td>10</td>

            <td className="tableRed">-2</td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td className="tableRed">
              <span>2</span>
            </td>
            <td className="tableRed">
              <span>2</span>
            </td>
            <td className="tableRed">
              <span>2</span>
            </td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td>10</td>
            <td className="tableRed">-2</td>
            <td>10</td>
            <td className="tableRed">(1)</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+54%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+54%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+54%</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td className="tableGreen">
              <span>10</span>
            </td>
            <td className="tableGreen">
              <span>10</span>
            </td>
            <td className="tableGreen">
              <span>10</span>
            </td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
            <td className="tableGreen">+10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>ИП</td>
            <td>Смирнов И. Н.</td>
            <td>
              {" "}
              <p>789,00 RUB</p>
              <p>536,50 BYN</p>
            </td>
            <td className="tableGreen">+54%</td>
            <td>
              <p>789,00 RUB</p>
              <p>536,50 BYN</p>
            </td>
            <td className="tableGreen">+54%</td>
            <td>
              <p>789,00 RUB</p>
              <p>536,50 BYN</p>
            </td>
            <td className="tableGreen">+54%</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td className="tableRed">
              <span>8</span>
            </td>
            <td className="tableRed">
              <span>8</span>
            </td>
            <td className="tableRed">
              <span>8</span>
            </td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
            <td className="tableRed">-8</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
          <tr>
            <td>Самозанятый</td>
            <td>Жук В. Д.</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableRed">+2%</td>
            <td>4 256,00 BYN</td>
            <td className="tableGreen">+2%</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td className="tableGreen">
              <span>12</span>
            </td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
            <td className="tableGreen">+12</td>
            <td>42</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DesktopScrollTable;
