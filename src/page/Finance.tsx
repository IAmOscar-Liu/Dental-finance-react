import "../styles/finance.css";
import CustomSelect from "../component/CustomSelect";

function Finance() {
  const onItemChange = (item: string) => {
    console.log(`You select ${item}`);
  };

  return (
    <div className="page finance">
      <h1 className="finance-title">
        XX牙技所服務費結算報表 2023/01/05 ~ 2023/02/04
      </h1>
      <div className="finance-btn-group">
        <CustomSelect
          data={["台北牙技所", "新竹牙技所", "台中牙技所", "高雄牙技所"]}
          defaultItemName="選擇牙技所"
          onItemChange={onItemChange}
        />
        <CustomSelect
          data={[
            "牙技所服務費結算表",
            "區域平台服務費總算表",
            "平台服務費總表",
          ]}
          customSelectWidth={250}
          defaultItemName="選擇結算表"
          onItemChange={onItemChange}
        />
      </div>
      <div className="table-group">
        <p className="table-group-type">幣別: TWD</p>
        <table>
          <tr>
            <th>訂單編號</th>
            <th>交易金額</th>
          </tr>
          <tr>
            <td>S202301010001</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>S202301010001</td>
            <td>20,000</td>
          </tr>
          <tr>
            <td>小計</td>
            <td>30,000</td>
          </tr>
        </table>

        <p className="table-group-type">幣別: USD</p>
        <table>
          <tr>
            <th>訂單編號</th>
            <th>交易金額</th>
          </tr>
          <tr>
            <td>S202301010003</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>小計</td>
            <td>1,000</td>
          </tr>
        </table>

        <p className="table-group-type">交易金額換算</p>
        <table>
          <tr>
            <th>交易幣別</th>
            <th>交易金額</th>
            <th>預設匯率(TWD)</th>
            <th>換算金額(TWD)</th>
          </tr>
          <tr>
            <td>TWD</td>
            <td>30,000</td>
            <td>1</td>
            <td>30,000</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>1,000</td>
            <td>30</td>
            <td>30,000</td>
          </tr>
        </table>

        <p className="table-group-type">服務費(TWD)</p>
        <table>
          <tr>
            <td>基本費</td>
            <td>25,000</td>
          </tr>
          <tr>
            <td>免費額度</td>
            <td>50,000</td>
          </tr>
          <tr>
            <td>交易金額</td>
            <td>60,000</td>
          </tr>
          <tr>
            <td>超額金額</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>超額服務費(10%)</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>總計</td>
            <td>26,000</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Finance;
