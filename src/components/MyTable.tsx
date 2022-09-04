import FieldIndexable from "../models/field-indexable";
import THeader from "../models/theader";
import OrderField from "../models/order-field";
import { OrderType } from "../models/order-type";
import { Table } from "react-bootstrap";
import "../App.scss";
import { OrderIconButtonParam } from "../models/orderIcon-button-param";
import { getImg } from "../mockData";

function orderIconButton({
  orderType,
  ascClick,
  descClick
}: OrderIconButtonParam) {
  let ascendingIconStyles: string = ["corder-icon", "ascending-icon"].join(" ");
  let descendingIconStyles: string = ["corder-icon", "descending-icon"].join(
    " "
  );
  if (orderType === OrderType.asc) {
    ascendingIconStyles += " ascending-icon-selected";
  } else if (orderType === OrderType.desc) {
    descendingIconStyles += " descending-icon-selected";
  }
  return (
    <span className="order-icons-wrapper">
      <i className={ascendingIconStyles} onClick={ascClick}></i>
      <i className={descendingIconStyles} onClick={descClick}></i>
    </span>
  );
}

export default function MyTable<T extends FieldIndexable>(
  data: T[],
  theaders: THeader[],
  fields: string[],
  orderFields: OrderField[]
) {
  const depatchClick = (clickedIndex: number, iconOrder: OrderType) => {
    if (orderFields[clickedIndex].state === iconOrder) {
      orderFields[clickedIndex].setState(OrderType.noOrder);
      data.sort((a, b) => a.id - b.id);
    } else {
      for (let i = 0; i < orderFields.length; i++) {
        if (i === clickedIndex) {
          orderFields[i].setState(iconOrder);
        } else {
          orderFields[i].setState(OrderType.noOrder);
        }
      }
      data.sort((a, b) => {
        return (
          (iconOrder === OrderType.asc ? 1 : -1) *
          ((a as FieldIndexable)[orderFields[clickedIndex].orderFileName] -
            (b as FieldIndexable)[orderFields[clickedIndex].orderFileName])
        );
      });
    }
  };
  return (
    <Table hover className="my-table" responsive>
      <thead>
        <tr>
          {theaders.map((e) => (
            <th key={e.id}>
              {e.name}
              {e.orderState === undefined ? (
                <></>
              ) : (
                orderIconButton({
                  orderType: e.orderState,
                  ascClick: () =>
                    depatchClick(e.orderIndexInHeaders!, OrderType.asc),
                  descClick: () =>
                    depatchClick(e.orderIndexInHeaders!, OrderType.desc)
                })
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.name}>
            {fields.map((field, index) => (
              <td key={field}>
                {index === 0 ? (
                  e["iconUrl"] ? (
                    <img
                      key={e["iconUrl"]}
                      className="icon-img"
                      alt="icon"
                      src={getImg(e["iconUrl"])}
                    ></img>
                  ) : (
                    <>
                      {(e["iconsUrl"] as string[]).map(
                        (iconUrl: string, iconIndex) => (
                          <img
                            key={e["id"] + "," + iconIndex}
                            className="icon-img"
                            alt="icon"
                            src={getImg(iconUrl)}
                          ></img>
                        )
                      )}
                    </>
                  )
                ) : (
                  <></>
                )}
                {e[field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
