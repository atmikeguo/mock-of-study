import "../App.scss";
import { Col, Row } from "react-bootstrap";
import THeader from "../models/theader";
import { useState } from "react";
import OrderField from "../models/order-field";
import MyTable from "../components/MyTable";
import { OrderType } from "../models/order-type";
import { mockData } from "../mockData";

function card(content: JSX.Element, additionalClassNames?: string[]) {
  let classNames = "my-card p-lg-3 p-sm-2 p-1";
  if (additionalClassNames != null && additionalClassNames.length > 0) {
    classNames += " " + additionalClassNames.join(" ") + " ";
  }
  return <div className={classNames}>{content}</div>;
}

function panel(item: string, value: string) {
  return (
    <div>
      <div className="panel-title">{item}</div>
      <div className="panel-value">{value}</div>
    </div>
  );
}

function mockChart(title: string) {
  return <div className="">mock chart: {title}</div>;
}

function TopTokensTable() {
  const [tvlOrder, setTVLOrder] = useState(OrderType.noOrder);
  const [volume24hOrder, setVolume24hOrder] = useState(OrderType.noOrder);
  const [volume7dOrder, setVolume7dOrder] = useState(OrderType.noOrder);
  const fields = ["name", "tvl", "volume24h", "volume7d"];
  const theaders = [
    new THeader(1, "Pairs"),
    new THeader(2, "TVL", tvlOrder, 0),
    new THeader(3, "Volume 24H", volume24hOrder, 1),
    new THeader(4, "Volume 7D", volume7dOrder, 2)
  ];
  const orderFields = [
    new OrderField(tvlOrder, setTVLOrder, "tvlNum"),
    new OrderField(volume24hOrder, setVolume24hOrder, "volume24hNum"),
    new OrderField(volume7dOrder, setVolume7dOrder, "volume7dNum")
  ];
  return MyTable(mockData.topTokens, theaders, fields, orderFields);
}

function TopPairsTable() {
  const [tvlOrder, setTVLOrder] = useState(OrderType.noOrder);
  const [freeAPROrder, setFreeAPROrder] = useState(OrderType.noOrder);
  const [volume24hOrder, setVolume24hOrder] = useState(OrderType.noOrder);
  const [volume7dOrder, setVolume7dOrder] = useState(OrderType.noOrder);
  const fields = ["name", "tvl", "freeAPR", "volume24h", "volume7d"];
  const theaders = [
    new THeader(1, "Pairs"),
    new THeader(2, "TVL", tvlOrder, 0),
    new THeader(3, "Free APR", freeAPROrder, 1),
    new THeader(4, "Volume 24H", volume24hOrder, 2),
    new THeader(5, "Volume 7D", volume7dOrder, 3)
  ];
  const orderFields = [
    new OrderField(tvlOrder, setTVLOrder, "tvlNum"),
    new OrderField(freeAPROrder, setFreeAPROrder, "freeAPRNum"),
    new OrderField(volume24hOrder, setVolume24hOrder, "volume24hNum"),
    new OrderField(volume7dOrder, setVolume7dOrder, "volume7dNum")
  ];
  return MyTable(mockData.topPairs, theaders, fields, orderFields);
}

export default function Analytics() {
  return (
    <div className="container-fluid my-container">
      <Row className="px-lg-3 px-sm-1">
        <Col>{card(panel("TVL", "$3.28M"))}</Col>
        <Col>{card(panel("Volume", "$143.62K"))}</Col>
      </Row>
      <Row className="px-lg-3 px-sm-1">
        <Col>{card(mockChart("TVL"), ["my-chart"])}</Col>
        <Col>{card(mockChart("Volume"), ["my-chart"])}</Col>
      </Row>
      <Row>
        <div style={{ width: "100%" }}>
          <div className="my-table-title">Top Tokens</div>
          {card(TopTokensTable(), ["my-table-container"])}
        </div>
      </Row>
      <Row>
        <div style={{ width: "100%" }}>
          <div className="my-table-title">Top Pairs</div>
          {card(TopPairsTable(), ["my-table-container"])}
        </div>
      </Row>
    </div>
  );
}
