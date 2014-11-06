$().ready(function() {

// $('#list1Id option').sort();
// $('#list1Id').multiselect();

function NASort(a, b) {    
    if (a.innerHTML == 'NA') {
        return 1;   
    }
    else if (b.innerHTML == 'NA') {
        return -1;   
    }       
    return (a.innerHTML > b.innerHTML) ? 1 : -1;
};

function sortList(a, b) {
	return $(a).text() > $(b).text() ? 1 : -1;
}

function addToList(event)
{
	debugger;
	$('#' + this.id + ' option:selected').remove().appendTo('#' + event.data.listId);
	return $('#' + event.data.listId + ' option').sort(sortList).appendTo('#' + event.data.listId);
}

function addToListChk(event)
{
	// debugger;
	$('#' + this.id + ' li:hover,input:checked').closest('li').find('input')
	.attr('checked', true).closest('li').remove().appendTo('#' + event.data.listId);
	// $('#' + this.id + ' input:checked').closest('li').remove().appendTo('#' + event.data.listId);
	return $('#' + event.data.listId + ' li').sort(sortList).appendTo('#' + event.data.listId);
}

function addToPrevChk(event)
{
	// debugger;
	$('#' + this.id + ' input:not(:checked)').closest('li').remove().appendTo('#' + event.data.listId);
	return $('#' + event.data.listId + ' li').sort(sortList).appendTo('#' + event.data.listId);
}
// $('#list1Id').click(function(){
// 	return !$('#list1Id option:selected').remove().appendTo('#list2Id');
// });

// $('#list2Id').click(function(){
// 	return !$('#list2Id option:selected').remove().appendTo('#list1Id');
// });

$('#list1Id option').sort(sortList).appendTo('#list1Id');

$('#list1Id').on('click', {listId: "list2Id"}, addToList);
$('#list2Id').on('click', {listId: "list1Id"}, addToList);

$('#list3Id li').sort(sortList).appendTo('#list3Id');
$('#list4Id li').sort(sortList).appendTo('#list4Id');
$('#list3Id').on('click', {listId: "list4Id"}, addToListChk);
$('#list4Id').on('click', {listId: "list3Id"}, addToPrevChk);

// debugger;
});