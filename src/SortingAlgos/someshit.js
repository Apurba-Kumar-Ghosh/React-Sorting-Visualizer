export default function MergeSortAnime(array) {
    let animations = [];
    if(array.length <= 1)
        return array
        let auxArray = array.slice();
    
  //console.log(array)
  mergeSortHelper(auxArray, array, 0, array.length - 1, animations);
  // console.log(array)
  return [animations, array];
}
function mergeSortHelper(auxArray, mainArray, startIdx, endIdx, animations) {
  if (startIdx === endIdx) return;
  const mid = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxArray, mainArray, startIdx, mid, animations);
  mergeSortHelper(auxArray, mainArray, mid + 1, endIdx, animations);
  doMerge(auxArray, mainArray, startIdx, mid, endIdx, animations);
}

function doMerge(auxArray, mainArray, startIdx, mid, endIdx, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = mid + 1;
    while (i <= mid && j <= endIdx) {
        animations.push([i, j]);

        animations.push([i, j]);

        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}
