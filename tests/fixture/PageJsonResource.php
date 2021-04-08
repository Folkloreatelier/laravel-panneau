<?php

use Illuminate\Http\Resources\Json\JsonResource;

class PageJsonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id(),
            'title' => $this->title(),
        ];
    }
}
