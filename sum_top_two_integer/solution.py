def sum_two_largest(arr: list[int]) -> int | None:
    if len(arr) < 2:
        return None
    
    index_of_largest = 0
    for i in range(len(arr)):
        if arr[i] > arr[index_of_largest]:
            index_of_largest = i

    index_of_second_largest = 0
    if index_of_largest == 0:
        index_of_second_largest = 1
    
    for i in range(len(arr)):
        if arr[i] > arr[index_of_second_largest] and i != index_of_largest:
            index_of_second_largest = i

    return arr[index_of_largest] + arr[index_of_second_largest]