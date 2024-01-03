'use client';

import { 
  Container, 
  SkeletonInner, 
  SkeletonImg,
  SkeletonBtn,
  SkeletonLineOne,
  SkeletonLineTwo } from '../components/page/styles'

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg />
    <SkeletonBtn />
    <SkeletonLineOne />
    <SkeletonLineTwo />
  </SkeletonInner>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled with Styled Components
      </h1>
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    </div>
  );
}