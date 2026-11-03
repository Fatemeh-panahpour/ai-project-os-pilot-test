/** Small deterministic fixture only. It DOES NOT check overlapping bookings. */
export function validateRequest(request,table){
  if(!request||!table||typeof request.guestRef!=='string'||!request.guestRef.trim())return {ok:false,reason:'GUEST_REFERENCE_REQUIRED'};
  if(typeof request.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(request.date))return {ok:false,reason:'DATE_INVALID'};
  if(typeof request.time!=='string'||!/^([01]\d|2[0-3]):[0-5]\d$/.test(request.time))return {ok:false,reason:'TIME_INVALID'};
  if(!Number.isInteger(request.partySize)||request.partySize<1)return {ok:false,reason:'PARTY_SIZE_INVALID'};
  if(!Number.isInteger(table.capacity)||table.capacity<request.partySize)return {ok:false,reason:'CAPACITY_EXCEEDED'};
  return {ok:true,tableId:table.id};
}
