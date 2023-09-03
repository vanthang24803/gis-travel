"use client";

export const data = [
  {
    id: "1",
    name: "Thành Phố Bắc Kạn",
    xa_phuong: [
      {
        name: "Phường Nguyễn Thị Minh Khai",
      },
      {
        name: "Phường Sông Cầu",
      },
      {
        name: "Phường Đức Xuân",
      },
      {
        name: "Phường Phùng Chí Kiên",
      },
      {
        name: "Phường Huyền Tụng",
      },
      {
        name: "Xã Dương Quang",
      },
      {
        name: "Xã Nông Thượng",
      },
      {
        name: "Phường Xuất Hóa",
      },
    ],
  },
  {
    id: "2",
    name: "Huyện Pác Nặm",
    xa_phuong: [
      {
        name: "Xã Bằng Thành",
      },
      {
        name: "Xã Nhạn Môn",
      },
      {
        name: "Xã Bộc Bố",
      },
      {
        name: "Xã Công Bằng",
      },
      {
        name: "Xã Giáo Hiệu",
      },
      {
        name: "Xã Xuân La",
      },
      {
        name: "Xã An Thắng",
      },
      {
        name: "Xã Cổ Linh",
      },
      {
        name: "Xã Nghiên Loan",
      },
      {
        name: "Xã Cao Tân",
      },
    ],
  },
  {
    id: "3",
    name: "Huyện Ba Bể",
    xa_phuong: [
      {
        name: "Thị trấn Chợ Rã",
      },
      {
        name: "Xã Bành Trạch",
      },
      {
        name: "Xã Phúc Lộc",
      },
      {
        name: "Xã Hà Hiệu",
      },
      {
        name: "Xã Cao Thượng",
      },
      {
        name: "Xã Khang Ninh",
      },
      {
        name: "Xã Nam Mẫu",
      },
      {
        name: "Xã Thượng Giáo",
      },
      {
        name: "Xã Địa Linh",
      },
      {
        name: "Xã Yến Dương",
      },
      {
        name: "Xã Chu Hương",
      },
      {
        name: "Xã Quảng Khê",
      },
      {
        name: "Xã Mỹ Phương",
      },
      {
        name: "Xã Hoàng Trĩ",
      },
      {
        name: "Xã Đồng Phúc",
      },
    ],
  },
  {
    id: "4",
    name: "Huyện Ngân Sơn",
    xa_phuong: [
      {
        name: "Thị trấn Nà Phặc",
      },
      {
        name: "Xã Thượng Ân",
      },
      {
        name: "Xã Bằng Vân",
      },
      {
        name: "Xã Cốc Đán",
      },
      {
        name: "Xã Trung Hoà",
      },
      {
        name: "Xã Đức Vân",
      },
      {
        name: "Xã Vân Tùng",
      },
      {
        name: "Xã Thượng Quan",
      },
      {
        name: "Xã Hiệp Lực",
      },
      {
        name: "Xã Thuần Mang",
      },
    ],
  },
  {
    id: "5",
    name: "Huyện Bạch Thông",
    xa_phuong: [
      {
        name: "Thị trấn Phủ Thông",
      },
      {
        name: "Xã Vi Hương",
      },
      {
        name: "Xã Sĩ Bình",
      },
      {
        name: "Xã Vũ Muộn",
      },
      {
        name: "Xã Đôn Phong",
      },
      {
        name: "Xã Lục Bình",
      },
      {
        name: "Xã Tân Tú",
      },
      {
        name: "Xã Nguyên Phúc",
      },
      {
        name: "Xã Cao Sơn",
      },
      {
        name: "Xã Quân Hà",
      },
      {
        name: "Xã Cẩm Giàng",
      },
      {
        name: "Xã Mỹ Thanh",
      },
      {
        name: "Xã Dương Phong",
      },
      {
        name: "Xã Quang Thuận",
      },
    ],
  },
  {
    id: "6",
    name: "Huyện Chợ Đồn",
    xa_phuong: [
      {
        name: "Thị trấn Bằng Lũng",
      },
      {
        name: "Xã Xuân Lạc",
      },
      {
        name: "Xã Nam Cường",
      },
      {
        name: "Xã Đồng Lạc",
      },
      {
        name: "Xã Tân Lập",
      },
      {
        name: "Xã Bản Thi",
      },
      {
        name: "Xã Quảng Bạch",
      },
      {
        name: "Xã Bằng Phúc",
      },
      {
        name: "Xã Yên Thịnh",
      },
      {
        name: "Xã Yên Thượng",
      },
      {
        name: "Xã Phương Viên",
      },
      {
        name: "Xã Ngọc Phái",
      },
      {
        name: "Xã Đồng Thắng",
      },
      {
        name: "Xã Lương Bằng",
      },
      {
        name: "Xã Đại Sảo",
      },
      {
        name: "Xã Nghĩa Tá",
      },
      {
        name: "Xã Yên Mỹ",
      },
      {
        name: "Xã Bình Trung",
      },
      {
        name: "Xã Yên Phong",
      },
    ],
  },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContentSection = () => {
  return (
    <>
      {data.map((index) => (
        <Accordion type="single" collapsible className="w-full" key={index.id}>
          <AccordionItem value={index.id}>
            <AccordionTrigger>{index.name}</AccordionTrigger>
            {index.xa_phuong.map((label) => (
              <AccordionContent key={label.name}>{label.name}</AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default ContentSection;
