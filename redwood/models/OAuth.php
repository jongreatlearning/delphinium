<?php namespace Delphinium\Redwood\Models;

use Model;

/**
 * OAuth Model
 */
class OAuth extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'delphinium_pm_credentials';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

}