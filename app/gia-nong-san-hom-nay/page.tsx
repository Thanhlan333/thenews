import Link from "next/link";

export default function PricePage() {
  return (
    <>
      <h1>Giá nông sản hôm nay</h1>
      <p>Chọn địa phương để xem giá:</p>

      <ul>
        <li>
          <Link href="/gia-nong-san-hom-nay/tp-hcm">
            TP.HCM
          </Link>
        </li>
        <li>
          <Link href="/gia-nong-san-hom-nay/binh-duong">
            Bình Dương
          </Link>
        </li>
      </ul>
    </>
  );
}
