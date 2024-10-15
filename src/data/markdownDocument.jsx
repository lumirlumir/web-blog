import { LuHeading1 } from 'react-icons/lu';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiVisualstudiocode } from 'react-icons/si';
import {
  FaBook,
  FaTag,
  FaRegCalendarPlus,
  FaRegCalendarXmark,
  FaHtml5,
  FaMarkdown,
  FaCss3Alt,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaGithub,
  FaCode,
  FaScrewdriverWrench,
  FaLaptopCode,
} from 'react-icons/fa6';

/**
 * @typedef {import('@/types').MarkdownDocumentData} MarkdownDocumentData
 * @typedef {import('@/types').MarkdownDocumentDataMeta} MarkdownDocumentDataMeta
 * @typedef {import('@/types').MarkdownDocumentDataTag} MarkdownDocumentDataTag
 * @typedef {import('@/types').MarkdownDocumentDataTagMeta} MarkdownDocumentDataTagMeta
 */

/**
 * The keys should be declared in {@link MarkdownDocumentData}.
 *
 * @type {{[key: string]: MarkdownDocumentDataMeta}}
 */
export const DATA = Object.freeze({
  title: {
    name: {
      en: 'Title',
      ko: '제목',
    },
    reactIcons: <LuHeading1 />,
  },
  description: {
    name: {
      en: 'Description',
      ko: '설명',
    },
    reactIcons: <FaBook />,
  },
  created: {
    name: {
      en: 'Created Date',
      ko: '생성한 날짜',
    },
    reactIcons: <FaRegCalendarPlus />,
  },
  updated: {
    name: {
      en: 'Updated Date',
      ko: '수정한 날짜',
    },
    reactIcons: <FaRegCalendarXmark />,
  },
  tags: {
    name: {
      en: 'Tags',
      ko: '태그',
    },
    reactIcons: <FaTag />,
  },
});

/**
 * The keys should be declared in {@link MarkdownDocumentDataTag}.
 *
 * @type {{[key: string]: MarkdownDocumentDataTagMeta}}
 */
export const DATA_TAG = Object.freeze({
  html: {
    name: {
      en: 'HTML',
      ko: '하이퍼 텍스트 마크업 언어',
    },
    reactIcons: <FaHtml5 />,
    order: 1,
  },
  markdown: {
    name: {
      en: 'Markdown',
      ko: '마크다운',
    },
    reactIcons: <FaMarkdown />,
    order: 2,
  },
  css: {
    name: {
      en: 'CSS',
      ko: '캐스케이딩 스타일 시트',
    },
    reactIcons: <FaCss3Alt />,
    order: 3,
  },
  javascript: {
    name: {
      en: 'JavaScript',
      ko: '자바스크립트',
    },
    reactIcons: <RiJavascriptFill />,
    order: 4,
  },
  nodejs: {
    name: {
      en: 'Node.js',
      ko: '노드JS',
    },
    reactIcons: <FaNodeJs />,
    order: 5,
  },
  npm: {
    name: {
      en: 'NPM',
      ko: '노드JS 패키지 매니저',
    },
    reactIcons: <FaNpm />,
    order: 6,
  },
  react: {
    name: {
      en: 'React',
      ko: '리액트',
    },
    reactIcons: <FaReact />,
    order: 7,
  },
  nextjs: {
    name: {
      en: 'Next.js',
      ko: '넥스트JS',
    },
    reactIcons: <TbBrandNextjs />,
    order: 8,
  },
  git: {
    name: {
      en: 'Git/GitHub',
      ko: '깃/깃허브',
    },
    reactIcons: <FaGithub />,
    order: 9,
  },
  vscode: {
    name: {
      en: 'VScode',
      ko: '비주얼 스튜디오 코드',
    },
    reactIcons: <SiVisualstudiocode />,
    order: 10,
  },
  baekjoon: {
    name: {
      en: 'Baekjoon',
      ko: '백준',
    },
    reactIcons: <FaCode />,
    order: 11,
  },
  convention: {
    name: {
      en: 'Coding Convention',
      ko: '코딩 컨벤션',
    },
    reactIcons: <FaScrewdriverWrench />,
    order: 12,
  },
  cs: {
    name: {
      en: 'Computer Science',
      ko: '컴퓨터 과학',
    },
    reactIcons: <FaLaptopCode />,
    order: 13,
  },
});
