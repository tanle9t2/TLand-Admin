
import { IoBedOutline, IoFlowerOutline } from "react-icons/io5";
import { TbEscalator, TbBath } from "react-icons/tb";
import { RiContractFill } from "react-icons/ri";
import { BsDoorOpen, BsBuildings } from "react-icons/bs";
import { RxDimensions } from "react-icons/rx";
import { LuPackage2 } from "react-icons/lu";
export const TYPE_NAME = {
    SELL: "Bán",
    RENT: "Cho thuê"
}
export const POST_STATUS = {
    SHOW: {
        param: "SHOW",
        color: 'success',
        label: 'Đang đăng',
    },
    WAITING_ACCEPT: {
        param: "WAITING_ACCEPT",
        color: 'info',
        label: 'Chờ duyệt',
    },
    PAYMENT: {
        param: "PAYMENT",
        color: 'success',
        label: 'Đã thanh toán',
    },
    WAITING_PAYMENT: {
        param: "WAITING_PAYMENT",
        color: 'warning',
        label: 'Chờ thanh toán',
    },
    REJECT: {
        param: "REJECT",
        color: 'error',
        label: 'Bị từ chối',
    },
    HIDE: {
        param: "HIDE",
        color: 'error',
        label: 'Ẩn',
    },
    EXPIRED: {
        param: "EXPIRED",
        color: 'warning',
        label: 'Hết hạn',
    },
};

export const MAX_IMAGE_UPLOAD = 12
export const PROPERTY_FEATURES = [
    "Hầm xe hơi",
    "Nhà nở hậu",
    "Nhà tóp hậu",
    "Nhà dính quy hoạch / lộ giới",
    "Nhà chưa hoàn công",
    "Nhà nát",
    "Đất chưa chuyển thổ",
    "Hiện trạng khác",
]
export const HOUSE_TYPE = [
    "Nhà mặt phố, mặt tiền",
    "Nhà ngõ, hẻm",
    "Nhà biệt thự",
    "Nhà phố liền kề"
]
export const DIRECT_ASSET = [
    "Bắc",
    "Đông Bắc",
    "Đông",
    "Đông Nam",
    "Nam",
    "Tây Nam",
    "Tây",
    "Tây Bắc"
];
export const LEGAL_INFO = [
    "Đã có sổ",
    "Đang chờ sổ",
    "Không có sổ",
    "Sổ chung/ công chứng vi bằng",
    "Giấy tờ viết tay"
]
export const INTERIOR_STATUS = [
    "Nội thất cao cấp",
    "Nội thất đầy đủ",
    "Hoàn thiện cơ bản",
    "Bàn giao thô",
]

export const PROPERTIES = {
    bedrooms: {
        icon: IoBedOutline,
        params: "bedrooms",
        label: "Số phòng ngủ",
    },
    floors: {
        icon: TbEscalator,
        label: "Số tầng",
        params: "floors"
    },
    bathrooms: {
        icon: TbBath,
        params: "bathrooms",
        label: "Số phòng tắm",
    },
    legalDocs: {
        icon: RiContractFill,
        label: "Thông tin pháp lý",
        params: "legal",
        items: [
            "Đã có sổ",
            "Đang chờ sổ",
            "Không có sổ",
            "Sổ chung/ công chứng vi bằng",
            "Giấy tờ viết tay"
        ]
    },
    mainDirection: {
        icon: BsDoorOpen,
        label: "Hướng cửa",
        params: "mainDirection",
        items: [
            "Bắc",
            "Đông Bắc",
            "Đông",
            "Đông Nam",
            "Nam",
            "Tây Nam",
            "Tây",
            "Tây Bắc"
        ]
    },
    houseType: {
        icon: BsBuildings,
        label: "Loại hình căn hộ",
        params: "houseType",
        items: {
            house: [
                "Nhà mặt phố, mặt tiền",
                "Nhà ngõ, hẻm",
                "Nhà biệt thự",
                "Nhà phố liền kề"
            ]
        }
    },
    dimension: {
        icon: RxDimensions,
        label: "Diện tích",
    },
    interiorStatus: {
        icon: LuPackage2,
        label: "Nội thất",
        items: [
            "Nội thất cao cấp",
            "Nội thất đầy đủ",
            "Hoàn thiện cơ bản",
            "Bàn giao thô",
        ],
        params: "interiorStatus"
    },
    hasGarden: {
        icon: IoFlowerOutline,
        label: "Sân vườn: ",
        items: [
            "Có sân vườn",
            "Không có sân vườn"
        ],
        params: "hasGarden"
    },
};
export const FILTER_NAME = {
    floors: "Số tầng",
    interiorStatus: "Nội thất",
    houseType: "Loại hình căn hộ",
    bathrooms: "Số phòng tắm",
    mainDirection: "Hướng cửa",
    legalDocs: "Thông tin pháp lý",
    minPrice: "Giá từ",
    maxPrice: "Đến",
    ward: "Phường"
}

export const FILTER_PRICE_SELL = [
    {
        label: "Giá dưới 1 tỷ",
        minPrice: 0,
        maxPrice: 1000000000
    },
    {
        label: "Giá 1 - 2 tỷ",
        minPrice: 1000000000,
        maxPrice: 2000000000
    },
    {
        label: "Giá 2 - 3 tỷ",
        minPrice: 2000000000,
        maxPrice: 3000000000
    },
    {
        label: "Giá 3 - 5 tỷ",
        minPrice: 3000000000,
        maxPrice: 5000000000
    },
    {
        label: "Giá 5 - 7 tỷ",
        minPrice: 5000000000,
        maxPrice: 7000000000
    },
    {
        label: "Giá 7 - 10 tỷ",
        minPrice: 7000000000,
        maxPrice: 10000000000
    },
    {
        label: "Giá trên 10 tỷ",
        minPrice: 10000000000,
        maxPrice: null
    }
];
export const FILTER_PRICE_RENT = [
    {
        label: "Giá dưới 2 triệu",
        minPrice: 0,
        maxPrice: 2000000
    },
    {
        label: "Giá 2 - 3 triệu",
        minPrice: 2000000,
        maxPrice: 3000000
    },
    {
        label: "Giá 3 - 5 triệu",
        minPrice: 3000000,
        maxPrice: 5000000
    },
    {
        label: "Giá 5 - 10 triệu",
        minPrice: 5000000,
        maxPrice: 10000000
    },
    {
        label: "Giá 10 - 15 triệu",
        minPrice: 10000000,
        maxPrice: 15000000
    },
    {
        label: "Giá 15 - 20 triệu",
        minPrice: 15000000,
        maxPrice: 20000000
    },
    {
        label: "Giá 20 - 30 triệu",
        minPrice: 20000000,
        maxPrice: 30000000
    },
    {
        label: "Giá 30 - 50 triệu",
        minPrice: 30000000,
        maxPrice: 50000000
    },
    {
        label: "Giá 50 - 70 triệu",
        minPrice: 50000000,
        maxPrice: 70000000
    },
    {
        label: "Giá trên 70 triệu",
        minPrice: 70000000,
        maxPrice: null
    }
];

export const PAGE_SIZE = 10;
export const PAGE = 1;
export const COMMENT_SIZE = 5;